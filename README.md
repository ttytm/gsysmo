<samp>

Example project for creating a GUI Application with WebUI in combination with a modern Webframework.\
_Gsysmo_ is a simple system monitor using Go, WebUI, Svelte 5 and Bun.

![gsysmo](https://github.com/ttytm/gsysmo/assets/34311583/692a5c1a-1862-4797-a258-b65a1471a780)

## Quick Start

1. Clone the repo
   ```sh
   git clone https://github.com/ttytm/gsysmo.git && cd gsysmo
   ```
2. Install the backend (Go) dependencies
   ```sh
   go mod tidy
   ```
3. Install frontend dependencies

   ```sh
   bun i --cwd ui
   ```

   ```sh
   bun run --cwd ui build
   ```

   <sub><blockquote>
   **NOTE:** As alternatives to `--cwd` used above - that you choose at will during development -, change to the ui directory or open it in a separate terminal, execute the bun commands without a specifying a path and change back to the (terminal with the) project root.\
      </blockquote></sub>

4. Build / run the application
   ```sh
   go run main.go
   ```

</samp>
