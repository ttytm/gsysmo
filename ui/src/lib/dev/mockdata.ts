import { randomInteger } from 'svelte-ux/utils/number';

export let data = {
	memory: {
		total: 31.078479766845703,
		available: 16.330596923828125,
		used: 12.121124267578125,
		used_percent: 39.001664040558545
	},
	cpu_used_percent: 18.749999993936704,
	processes: [
		{
			pid: 1,
			command: 'systemd',
			path: '',
			user: 'root',
			memory_used_percent: 0.030293223,
			cpu_used_percent: 0.1547108875712684
		},
		{
			pid: 459,
			command: 'systemd-journald',
			path: '',
			user: 'root',
			memory_used_percent: 0.14483793,
			cpu_used_percent: 0.015689894710926446
		},
		{
			pid: 492,
			command: 'systemd-userdbd',
			path: '',
			user: 'root',
			memory_used_percent: 0.010212301,
			cpu_used_percent: 0.0010460011444131986
		},
		{
			pid: 1154,
			command: 'pipewire',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.05033732,
			cpu_used_percent: 0.002123425006305614
		},
		{
			pid: 1160,
			command: 'wireplumber',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.049073055,
			cpu_used_percent: 0.0018658035886293368
		},
		{
			pid: 1192,
			command: 'Xwayland',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.16934991,
			cpu_used_percent: 0.33289890716430365
		},
		{
			pid: 1241,
			command: 'ksmserver',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.056118563,
			cpu_used_percent: 0.004426473434953843
		},
		{
			pid: 1243,
			command: 'kded6',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.17047916,
			cpu_used_percent: 0.056006208813487335
		},
		{
			pid: 1296,
			command: 'plasmashell',
			path: '/home/t',
			user: 't',
			memory_used_percent: 1.6538774,
			cpu_used_percent: 0.7348336231330729
		},
		{
			pid: 1327,
			command: 'kactivitymanagerd',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.077758335,
			cpu_used_percent: 0.0010695442548239607
		},
		{
			pid: 1328,
			command: 'gmenudbusmenuproxy',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.014029641,
			cpu_used_percent: 0.003840991042591213
		},
		{
			pid: 1329,
			command: 'polkit-kde-authentication-agent-1',
			path: '',
			user: 't',
			memory_used_percent: 0.057861526,
			cpu_used_percent: 0.00011710338533145776
		},
		{
			pid: 1330,
			command: 'org_kde_powerdevil',
			path: '',
			user: 't',
			memory_used_percent: 0.07772151,
			cpu_used_percent: 0.00209224714921865
		},
		{
			pid: 1331,
			command: 'xdg-desktop-portal-kde',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.15061918,
			cpu_used_percent: 0.018994169063937392
		},
		{
			pid: 1332,
			command: 'xembedsniproxy',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.0132440785,
			cpu_used_percent: 0.0038644117047015843
		},
		{
			pid: 1364,
			command: 'ksystemstats',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.04013729,
			cpu_used_percent: 0.17562384978112686
		},
		{
			pid: 1465,
			command: 'firewall-applet',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.11134109,
			cpu_used_percent: 0.0013427854785290159
		},
		{
			pid: 1468,
			command: 'kdeconnectd',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.055676684,
			cpu_used_percent: 0.00022639987697408614
		},
		{
			pid: 1470,
			command: 'xwaylandvideobridge',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.06502978,
			cpu_used_percent: 0.0044733492897920816
		},
		{
			pid: 1479,
			command: 'agent',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.009733601,
			cpu_used_percent: 0.000007806892295940206
		},
		{
			pid: 1480,
			command: 'kaccess',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.05103696,
			cpu_used_percent: 0.006315775862432999
		},
		{
			pid: 1703,
			command: 'pipewire-pulse',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.050865117,
			cpu_used_percent: 0.07800707669103515
		},
		{
			pid: 1842,
			command: 'ssh-agent',
			path: '',
			user: 't',
			memory_used_percent: 0.011611584,
			cpu_used_percent: 0.0020688749080368177
		},
		{
			pid: 7897,
			command: 'krunner',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.527922,
			cpu_used_percent: 0.016363558288703912
		},
		{
			pid: 9535,
			command: 'at-spi-bus-launcher',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.012568987,
			cpu_used_percent: 0.00005479840549859765
		},
		{
			pid: 15366,
			command: 'dbus-broker',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.0027494659,
			cpu_used_percent: 0.00003923201192874073
		},
		{
			pid: 15402,
			command: 'at-spi2-registryd',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.0054989317,
			cpu_used_percent: 0.00003138585578407294
		},
		{
			pid: 105414,
			command: 'prettierd',
			path: '/home/t/Nextcloud/Dev/webui/go-webui',
			user: 't',
			memory_used_percent: 0.08383416,
			cpu_used_percent: 0.0001814448799273631
		},
		{
			pid: 109145,
			command: 'baloorunner',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.37389052,
			cpu_used_percent: 0.003719747798529892
		},
		{
			pid: 122651,
			command: 'prettierd',
			path: '/home/t/Nextcloud/Dev/webui/webui',
			user: 't',
			memory_used_percent: 0.058610264,
			cpu_used_percent: 0.00014955887136215183
		},
		{
			pid: 133953,
			command: 'prettierd',
			path: '/home/t/Git/go-webui',
			user: 't',
			memory_used_percent: 0.053332273,
			cpu_used_percent: 0.0001338901558111711
		},
		{
			pid: 163089,
			command: 'prettierd',
			path: '/home/t/.local/share/nvim/lazy/tabs-vs-spaces.nvim',
			user: 't',
			memory_used_percent: 0.052338045,
			cpu_used_percent: 0.00014556297007761658
		},
		{
			pid: 177605,
			command: 'prettierd',
			path: '/home/t/Nextcloud/Dev/webui/odin-webui',
			user: 't',
			memory_used_percent: 0.06085648,
			cpu_used_percent: 0.00015486009820278197
		},
		{
			pid: 210582,
			command: 'Discord',
			path: '/usr/bin',
			user: 't',
			memory_used_percent: 0.41487476,
			cpu_used_percent: 0.13840747444910892
		},
		{
			pid: 210585,
			command: 'Discord',
			path: '/usr/bin',
			user: 't',
			memory_used_percent: 0.031422466,
			cpu_used_percent: 0.000009309084901754613
		},
		{
			pid: 210586,
			command: 'Discord',
			path: '/proc/210587/fdinfo',
			user: 't',
			memory_used_percent: 0.031422466,
			cpu_used_percent: 0.000027927254679661026
		},
		{
			pid: 210602,
			command: 'chrome_crashpad_handler',
			path: '/usr/bin',
			user: 't',
			memory_used_percent: 0.0054989317,
			cpu_used_percent: 0.000009309171538552326
		},
		{
			pid: 210628,
			command: 'Discord',
			path: '/usr/bin',
			user: 't',
			memory_used_percent: 0.26873574,
			cpu_used_percent: 0.07925902421872262
		},
		{
			pid: 210632,
			command: 'Discord',
			path: '/usr/bin',
			user: 't',
			memory_used_percent: 0.12652452,
			cpu_used_percent: 0.023347619513978325
		},
		{
			pid: 210699,
			command: 'Discord',
			path: '/usr/bin',
			user: 't',
			memory_used_percent: 0.9507015,
			cpu_used_percent: 1.613266513043379
		},
		{
			pid: 210753,
			command: 'Discord',
			path: '/usr/bin',
			user: 't',
			memory_used_percent: 0.056818202,
			cpu_used_percent: 0.0045801976534642274
		},
		{
			pid: 213158,
			command: 'prettierd',
			path: '/home/t/.vmodules/vwebui',
			user: 't',
			memory_used_percent: 0.08281539,
			cpu_used_percent: 0.0002333287862341167
		},
		{
			pid: 501957,
			command: 'yakuake',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.2614202,
			cpu_used_percent: 0.023723708201025828
		},
		{
			pid: 501972,
			command: 'zsh',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.023615947,
			cpu_used_percent: 0.0007496339014116166
		},
		{
			pid: 502402,
			command: 'gitstatusd-linux-x86_64',
			path: '/',
			user: 't',
			memory_used_percent: 0.0031422467,
			cpu_used_percent: 0.0012126564419900519
		},
		{
			pid: 503324,
			command: 'zsh',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.03549757,
			cpu_used_percent: 0.003705795426660496
		},
		{
			pid: 503750,
			command: 'gitstatusd-linux-x86_64',
			path: '/',
			user: 't',
			memory_used_percent: 0.0054989317,
			cpu_used_percent: 0.0012832149971642335
		},
		{
			pid: 540198,
			command: 'kitty',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.5550607,
			cpu_used_percent: 0.6588841341775133
		},
		{
			pid: 588558,
			command: 'baloo_file_extractor',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.76926124,
			cpu_used_percent: 0.8675870533534512
		},
		{
			pid: 665962,
			command: 'prettierd',
			path: '/home/t/Nextcloud/Dev/webui/stats',
			user: 't',
			memory_used_percent: 0.124879755,
			cpu_used_percent: 0.0009741092344667641
		},
		{
			pid: 669307,
			command: 'prettierd',
			path: '/home/t/Nextcloud/Dev/webui/stats/ui',
			user: 't',
			memory_used_percent: 0.19206983,
			cpu_used_percent: 0.003483324382411247
		},
		{
			pid: 774390,
			command: 'VirtualBox',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.3042333,
			cpu_used_percent: 0.1569361322468155
		},
		{
			pid: 774826,
			command: 'code',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.33475974,
			cpu_used_percent: 0.0869180072469418
		},
		{
			pid: 774829,
			command: 'code',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.02828022,
			cpu_used_percent: 0.000044527667400440566
		},
		{
			pid: 774830,
			command: 'code',
			path: '/proc/774831/fdinfo',
			user: 't',
			memory_used_percent: 0.02788744,
			cpu_used_percent: 0.00004452766711108539
		},
		{
			pid: 774856,
			command: 'code',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.21087421,
			cpu_used_percent: 0.03749229533502742
		},
		{
			pid: 774863,
			command: 'code',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.101754785,
			cpu_used_percent: 0.02088347557066342
		},
		{
			pid: 774881,
			command: 'code',
			path: '/proc/774831/fdinfo',
			user: 't',
			memory_used_percent: 0.6564227,
			cpu_used_percent: 0.4578093219688334
		},
		{
			pid: 774982,
			command: 'code',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.74629587,
			cpu_used_percent: 7.1261298523742385
		},
		{
			pid: 774993,
			command: 'code',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.2234432,
			cpu_used_percent: 0.07387797688085482
		},
		{
			pid: 774994,
			command: 'code',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.34665364,
			cpu_used_percent: 0.19108523047734394
		},
		{
			pid: 775030,
			command: 'v-analyzer',
			path: '/home/t/Nextcloud',
			user: 't',
			memory_used_percent: 3.652923,
			cpu_used_percent: 0.048274437980720834
		},
		{
			pid: 775154,
			command: 'code',
			path: '/home/t/Nextcloud',
			user: 't',
			memory_used_percent: 0.10591581,
			cpu_used_percent: 0.01919484252176664
		},
		{
			pid: 775190,
			command: 'code',
			path: '/home/t/Nextcloud',
			user: 't',
			memory_used_percent: 0.11783425,
			cpu_used_percent: 0.020442749590325614
		},
		{
			pid: 775221,
			command: 'code',
			path: '/home/t/Nextcloud',
			user: 't',
			memory_used_percent: 0.16572896,
			cpu_used_percent: 0.01830494563180538
		},
		{
			pid: 775255,
			command: 'code',
			path: '/home/t/Nextcloud',
			user: 't',
			memory_used_percent: 0.1757326,
			cpu_used_percent: 0.02872801883709071
		},
		{
			pid: 775297,
			command: 'code',
			path: '/home/t/Nextcloud',
			user: 't',
			memory_used_percent: 0.17572032,
			cpu_used_percent: 0.06596603220733893
		},
		{
			pid: 775463,
			command: 'language_server_linux_x64',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.51442015,
			cpu_used_percent: 0.06379294159218743
		},
		{
			pid: 775481,
			command: 'language_server_linux_x64',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.9806756,
			cpu_used_percent: 0.5547890660213792
		},
		{
			pid: 778714,
			command: 'nvim',
			path: '/',
			user: 't',
			memory_used_percent: 0.0067263716,
			cpu_used_percent: 0.03632227847377829
		},
		{
			pid: 779061,
			command: 'v-analyzer',
			path: '/home/t/Nextcloud/Dev/vlang/v',
			user: 't',
			memory_used_percent: 2.053765,
			cpu_used_percent: 0.4272309499180555
		},
		{
			pid: 816658,
			command: 'prettierd',
			path: '/home/t/Nextcloud/Dev/vlang/playground',
			user: 't',
			memory_used_percent: 0.050410964,
			cpu_used_percent: 0.0009351206465767251
		},
		{
			pid: 845586,
			command: 'prettierd',
			path: '/home/t/Git/awesome-odin',
			user: 't',
			memory_used_percent: 0.12000682,
			cpu_used_percent: 0.006213684676987791
		},
		{
			pid: 852121,
			command: 'kitty',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.2704419,
			cpu_used_percent: 0.0029338632823141314
		},
		{
			pid: 852135,
			command: 'zsh',
			path: '/home/t',
			user: 't',
			memory_used_percent: 0.033558212,
			cpu_used_percent: 0.00865616635055981
		},
		{
			pid: 852583,
			command: 'gitstatusd-linux-x86_64',
			path: '/',
			user: 't',
			memory_used_percent: 0.00471337,
			cpu_used_percent: 0.002054306917942056
		},
		{
			pid: 855032,
			command: 'zsh',
			path: '/home/t/.local/share/Trash/files/tmp_sux',
			user: 't',
			memory_used_percent: 0.037854254,
			cpu_used_percent: 0.05057686333177748
		},
		{
			pid: 855457,
			command: 'gitstatusd-linux-x86_64',
			path: '/',
			user: 't',
			memory_used_percent: 0.00471337,
			cpu_used_percent: 0.00215253780408158
		},
		{
			pid: 862594,
			command: 'prettierd',
			path: '/home/t/Git/svelte-ux',
			user: 't',
			memory_used_percent: 0.28523254,
			cpu_used_percent: 0.005094535735936097
		},
		{
			pid: 907381,
			command: 'dirmngr',
			path: '',
			user: 'root',
			memory_used_percent: 0.077120066,
			cpu_used_percent: 0.02736505946520612
		},
		{
			pid: 909524,
			command: 'prettierd',
			path: '/home/t/Nextcloud/Dev/tmp/stats',
			user: 't',
			memory_used_percent: 0.3359749,
			cpu_used_percent: 0.021652040944446845
		}
	]
};

export function randomizeProcs() {
	return data.processes.map((d) => {
		return {
			...d,
			memory_used_percent: randomInteger(5.0, 15.0),
			cpu_used_percent: randomInteger(0.1, 5.0)
		};
	});
}
