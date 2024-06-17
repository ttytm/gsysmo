package main

import (
	"log"

	"github.com/shirou/gopsutil/v3/cpu"
	"github.com/shirou/gopsutil/v3/mem"
	"github.com/shirou/gopsutil/v3/process"

	ui "github.com/webui-dev/go-webui/v2"
)

type Stats struct {
	Memory struct {
		Total       float64 `json:"total"`
		Available   float64 `json:"available"`
		Used        float64 `json:"used"`
		UsedPercent float64 `json:"used_percent"`
	} `json:"memory"`
	CPUUsedPercent float64   `json:"cpu_used_percent"`
	Processes      []Process `json:"processes"`
}

type Process struct {
	Pid               int32   `json:"pid"`
	Command           string  `json:"command"`
	Path              string  `json:"path"`
	User              string  `json:"user"`
	MemoryUsedPercent float32 `json:"memory_used_percent"`
	CPUUsedPercent    float64 `json:"cpu_used_percent"`
}

const bytesInGB = float64(1 << 30) // 1 GB = 2^30 bytes

func bytesToGb(bytes uint64) float64 {
	// Alternatively, a more readable version if unfamiliar with bitwise operators.
	// return float64(bytes) / 1024 / 1024 / 1024
	return float64(bytes) / bytesInGB
}

func getStats(_ ui.Event) (result Stats) {
	// Get total memory usage.
	virtualMem, err := mem.VirtualMemory()
	if err != nil {
		log.Fatalf("Error getting memory usage: %v", err)
	}
	result.Memory.Total = bytesToGb(virtualMem.Total)
	result.Memory.Available = bytesToGb(virtualMem.Available)
	result.Memory.Used = bytesToGb(virtualMem.Used)
	result.Memory.UsedPercent = virtualMem.UsedPercent

	// Get total CPU usage.
	percentages, err := cpu.Percent(0, false)
	if err != nil {
		log.Fatalf("Error getting CPU usage: %v", err)
	}
	result.CPUUsedPercent = percentages[0]
	/* times, _ := cpu.Times(true)
	for _, t := range times {
		log.Println(t.String())
	} */

	// Get processes and their memory and CPU usage.
	procs, err := process.Processes()
	if err != nil {
		log.Fatalf("Error getting processes: %v", err)
	}
	for _, p := range procs {
		cpuPercent, err := p.CPUPercent()
		if err != nil {
			log.Println(err)
			continue
		}
		if cpuPercent == 0.0 {
			continue
		}
		memPercent, err := p.MemoryPercent()
		if err != nil {
			log.Println(err)
			continue
		}
		if memPercent == 0.0 {
			continue
		}
		proc := Process{Pid: p.Pid, MemoryUsedPercent: memPercent, CPUUsedPercent: cpuPercent}
		if proc.Command, err = p.Name(); err != nil {
			log.Println(err)
			continue
		}
		if proc.User, err = p.Username(); err != nil {
			log.Println(err)
		}
		// Ignore permission denied errors for root processes.
		proc.Path, _ = p.Cwd()
		result.Processes = append(result.Processes, proc)
	}

	return
}

func main() {
	/* stats := getStats(ui.Event{})
	log.Println(len(stats.Processes))
	for _, p := range stats.Processes {
		log.Println(p)
	} */

	w := ui.NewWindow()

	if err := ui.SetDefaultRootFolder("ui/build"); err != nil {
		log.Fatalf("Ensure you have run `bun run --cwd ui build`. %v", err)
	}

	ui.Bind(w, "getStats", getStats)

	// Example that connects to a running localhost instance during development.
	/* w.Show("<html><script src='webui.js'></script></html>")
	w.Navigate("http://localhost:5173") */

	w.ShowBrowser("index.html", ui.ChromiumBased)

	ui.Wait()
}
