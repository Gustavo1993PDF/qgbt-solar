(() => {
  const css = `
  .sim-toolbar{display:grid;grid-template-columns:1fr auto;gap:14px;align-items:center;padding:2px 4px 15px}.sim-actions{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end}.sim-actions .danger{color:#9d2f29;border-color:#e8bbb7;background:#fff8f7}.sim-actions .success{color:#0f674b;border-color:#acd6c6;background:#f2fbf7}.sim-readout{display:flex;align-items:center;gap:12px;margin:0 4px 14px;padding:12px 14px;border:1px solid #bcdccc;border-radius:11px;color:#175d49;background:#f0faf5;font-size:12px;font-weight:700}.sim-readout:before{content:"";width:9px;height:9px;flex:0 0 auto;border-radius:50%;background:#2dae79;box-shadow:0 0 0 5px rgba(45,174,121,.13)}.sim-readout.is-off{color:#7c534f;border-color:#ebc9c5;background:#fff7f5}.sim-readout.is-off:before{background:#c65b53;box-shadow:0 0 0 5px rgba(198,91,83,.12)}.sim-readout.is-solar{color:#745618;border-color:#ead49f;background:#fff9e9}.sim-readout.is-solar:before{background:#d79a27;box-shadow:0 0 0 5px rgba(215,154,39,.14)}.sim-canvas{overflow-x:auto;border:1px solid #dce3df;border-radius:13px;background-color:#f9fbfa;background-image:radial-gradient(circle,rgba(25,73,58,.12) 1px,transparent 1px);background-size:20px 20px}.sim-canvas svg{display:block;width:100%;min-width:1450px;height:auto}.sim-wire{fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;transition:opacity .2s,filter .2s}.sim-wire.l1{stroke:#c9443e}.sim-wire.l2{stroke:#263038}.sim-wire.l3{stroke:#2e6591}.sim-wire.neutral{stroke:#46a2d0}.sim-wire.positive{stroke:#e04d3f}.sim-wire.negative{stroke:#3a4248}.sim-wire.pe{stroke:#568e43;stroke-dasharray:8 5}.sim-wire.is-live:not(.pe){filter:drop-shadow(0 0 3px currentColor);stroke-dasharray:8 8;animation:simCurrent 1.1s linear infinite}.sim-wire.phase-unavailable,.sim-bus.phase-unavailable{opacity:.06!important;filter:none!important;animation:none!important}.sim-wire.is-dead{opacity:.15;animation:none;filter:none;stroke-dasharray:none}.sim-bus{stroke-width:8;stroke-linecap:round;transition:opacity .2s,filter .2s}.sim-bus.l1{stroke:#c9443e}.sim-bus.l2{stroke:#263038}.sim-bus.l3{stroke:#2e6591}.sim-bus.neutral{stroke:#46a2d0}.sim-bus.pe{stroke:#568e43;stroke-dasharray:8 5}.sim-bus.is-live{filter:drop-shadow(0 0 4px rgba(42,141,103,.25))}.sim-bus.is-dead{opacity:.2}.sim-device{cursor:pointer;outline:none}.sim-device .device-body,.sim-static .device-body{fill:#fff;stroke:#b7c5be;stroke-width:1.5;filter:url(#simShadow);transition:stroke .18s}.sim-device:hover .device-body,.sim-device:focus .device-body{stroke:#218967}.device-head{fill:#e8f3ed}.solar .device-head{fill:#fff0c9}.cap .device-head{fill:#e7eff7}.mode-unavailable{opacity:.3}.mode-unavailable .device-body{stroke-dasharray:4 3}.sim-device.off .device-body{fill:#f4f5f4;stroke:#c9cfcc}.dev-title{fill:#173a2f;font-size:12px;font-weight:800;text-anchor:middle}.dev-sub{fill:#68776f;font-size:9px;text-anchor:middle}.dev-value{fill:#187253;font-size:10px;font-weight:800;text-anchor:middle}.sim-device.off .dev-value{fill:#9c5c56}.breaker-slot{fill:#dfe6e2;stroke:#c3cdc8}.breaker-lever{fill:#207b5e;stroke:#105a43;transition:transform .2s,fill .2s;transform-box:fill-box;transform-origin:center}.sim-device.off .breaker-lever{fill:#b75a52;transform:translateY(13px)}.breaker-state{fill:#147251;font-size:9px;font-weight:900;text-anchor:middle}.sim-device.off .breaker-state{fill:#a34b45}.sim-label{fill:#66776e;font-size:9px;font-weight:700}.sim-label.strong{fill:#213e34;font-size:10px;font-weight:900}.sim-chip{fill:#fff;stroke:#c5d0cb}.sim-chip-text{fill:#29443a;font-size:9px;font-weight:900;text-anchor:middle}.sim-load-icon{fill:#fff;stroke:#98aaa1;stroke-width:1.5}.sim-load-glow{fill:#d4ef6d;opacity:.9;filter:drop-shadow(0 0 7px rgba(177,221,67,.65))}.sim-load-off{fill:#e4e8e6;opacity:1;filter:none}.sim-inspector{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-top:12px}.sim-state-card{padding:11px 13px;border:1px solid #dce4e0;border-radius:10px;background:#fff}.sim-state-card span{display:block;color:#76857d;font-size:9px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.sim-state-card strong{display:block;margin-top:3px;color:#183b30;font-size:12px}.sim-state-card strong.offline{color:#a54e48}.sim-state-card strong.solar-live{color:#b06f0e}.sim-hint{display:flex;align-items:center;gap:8px}.sim-hint:before{content:"↳";color:#218967;font-weight:900}.sim-wire,.sim-bus{cursor:help;pointer-events:stroke}.sim-wire:hover,.sim-bus:hover{stroke-width:9;filter:drop-shadow(0 0 5px rgba(20,70,55,.38))}.sim-tooltip{position:fixed;z-index:100;display:none;max-width:340px;padding:11px 13px;color:#f5fff9;background:#122f27;border:1px solid rgba(255,255,255,.16);border-radius:9px;box-shadow:0 10px 28px rgba(0,0,0,.22);font-size:12px;line-height:1.35;pointer-events:none}.sim-tooltip.show{display:block}.sim-tooltip b{display:block;margin-bottom:2px}.sim-tooltip small{display:block;color:#c7d9d1;line-height:1.45}.sim-tooltip .tip-status{margin-top:6px;padding-top:6px;color:#83dfb8;border-top:1px solid rgba(255,255,255,.14);font-weight:800}.has-explanation{cursor:help}.wm-stat.has-explanation:hover,.spda-field.has-explanation:hover,.spda-result.has-explanation:hover,.solar-field.has-explanation:hover,.solar-result.has-explanation:hover,.battery-field.has-explanation:hover,.battery-result.has-explanation:hover,.cable-controls label.has-explanation:hover,.cable-summary div.has-explanation:hover{border-color:#55a98b;box-shadow:0 0 0 3px rgba(40,139,104,.09)}.sim-static.has-explanation .device-body,.sim-device.has-explanation .device-body,.sim-load-help.has-explanation .sim-load-icon{transition:stroke .18s,filter .18s}.sim-static.has-explanation:hover .device-body,.sim-device.has-explanation:hover .device-body,.sim-load-help.has-explanation:hover .sim-load-icon{stroke:#218967;filter:drop-shadow(0 0 7px rgba(33,137,103,.28))}.sim-tooltip-dot{display:inline-block;width:9px;height:9px;margin-right:7px;border-radius:50%;vertical-align:1px}.socket-earth{fill:#568e43;filter:drop-shadow(0 0 4px rgba(86,142,67,.4))}.socket-earth-mark{fill:#568e43;font-size:9px;font-weight:900;text-anchor:middle}.wm-wrap{display:grid;grid-template-columns:1fr 330px;gap:14px;margin:0 4px 14px}.wm-meter{align-self:start;padding:14px;color:#eaf7f4;background:#101817;border:5px solid #eef1ef;border-radius:16px;box-shadow:inset 0 0 0 1px #46504d,0 7px 20px rgba(20,40,34,.12)}.wm-top{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:10px}.wm-top strong{font-size:13px;letter-spacing:.08em}.wm-terminals{display:flex;gap:6px}.wm-terminals i{display:grid;place-items:center;width:24px;height:24px;border:1px solid #68726f;border-radius:50%;color:#ced8d4;font-style:normal;font-size:10px;font-weight:900}.wm-display{padding:12px;border:1px solid #33433f;border-radius:8px;background:#050908;box-shadow:inset 0 0 16px rgba(0,0,0,.8)}.wm-head,.wm-phase{display:grid;grid-template-columns:42px repeat(3,1fr);gap:8px;align-items:center}.wm-head{padding-bottom:5px;color:#84928e;font-size:9px;font-weight:800;text-align:right}.wm-phase{min-height:28px;border-top:1px solid #15201d}.wm-phase.is-inactive{opacity:.34}.wm-phase.is-inactive output{color:#84908c;text-shadow:none}.wm-phase b{color:#edf6f3}.wm-phase output{font:700 17px/1 'Courier New',monospace;text-align:right;text-shadow:0 0 8px currentColor}.wm-v{color:#4e82ff}.wm-a{color:#ff544d}.wm-kw{color:#f3df3f}.wm-totals{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:10px}.wm-total{padding:7px;border:1px solid #25332f;border-radius:6px;background:#0a100e}.wm-total span{display:block;color:#71817c;font-size:8px;text-transform:uppercase}.wm-total strong{display:block;margin-top:2px;color:#54e5d5;font:700 15px/1.2 'Courier New',monospace}.wm-bottom{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-top:10px;color:#8ba099;font-size:10px}.wm-bottom strong{color:#ecf5f1}.wm-side{display:grid;grid-template-columns:1fr 1fr;gap:9px;align-content:start}.wm-side>.btn{grid-column:1/-1}.wm-stat{padding:12px;border:1px solid #dce4e0;border-radius:11px;background:#fff}.wm-stat span{display:block;color:#76857d;font-size:9px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.wm-stat strong{display:block;margin-top:4px;font-size:16px}.wm-stat small{display:block;margin-top:3px;color:#718078}.wm-stat .export{color:#b17612}.wm-stat .import{color:#187153}.cap-estimate{background:#f8fbfa}.cap-steps{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}.cap-step{padding:4px 7px;color:#315a4c;background:#e7f3ed;border:1px solid #c8ded3;border-radius:6px;font-size:10px;font-weight:800}.cable-panel{overflow:hidden}.cable-controls{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:18px;background:#f8faf9;border-bottom:1px solid #dce4e0}.cable-controls label{display:block}.cable-controls select,.cable-controls input{width:100%;height:42px;margin-top:5px;padding:0 10px;color:#18352c;background:#fff;border:1px solid #cbd6d0;border-radius:9px;font-weight:700}.cable-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;padding:14px 18px;border-bottom:1px solid #dce4e0}.cable-summary div{padding:10px 12px;background:#f3f7f5;border-radius:9px}.cable-summary span{display:block;color:#75837c;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.07em}.cable-summary strong{display:block;margin-top:3px;font-size:13px}.cable-table-wrap{overflow-x:auto}.cable-table{min-width:1120px}.cable-table td{font-size:12px}.cable-table input{width:72px;padding:7px 8px;border:1px solid #cbd6d0;border-radius:7px}.cable-size{color:#166b52;font-size:14px;white-space:nowrap}.cable-badge{display:inline-block;padding:4px 7px;border-radius:6px;background:#e9f4ef;color:#17664e;font-size:10px;font-weight:800;white-space:nowrap}.cable-badge.warn{color:#8f5610;background:#fff2d8}.drop-ok{color:#187153;font-weight:800}.drop-warn{color:#b04942;font-weight:800}.cable-note{padding:14px 18px;color:#65746c;background:#fbfcfb;border-top:1px solid #e1e7e4;font-size:11px}.cable-note strong{color:#30463c}.wm-live{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;color:#77f0c4;background:#173128;border:1px solid #2c6652;border-radius:999px;font-size:9px;font-weight:900;letter-spacing:.09em}.wm-live:before{content:"";width:7px;height:7px;border-radius:50%;background:#48e49f;box-shadow:0 0 0 0 rgba(72,228,159,.55);animation:meterPulse 1.4s infinite}.wm-demand{display:grid;grid-template-columns:1fr auto;gap:7px;align-items:center}.wm-demand input{grid-column:1/-1;width:100%;accent-color:#218967}.wm-demand output{color:#166b52;font-size:15px;font-weight:900}.battery-accordion{margin:0 4px 14px;border:1px solid #cadbd3;border-radius:13px;background:#fff;overflow:hidden}.battery-accordion summary{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:14px 16px;cursor:pointer;list-style:none;background:linear-gradient(90deg,#f1f8f5,#fbfdfc)}.battery-accordion summary::-webkit-details-marker{display:none}.battery-accordion summary:after{content:"＋";display:grid;place-items:center;width:27px;height:27px;flex:0 0 auto;color:#176b51;background:#e3f1eb;border-radius:50%;font-size:17px;font-weight:900}.battery-accordion[open] summary:after{content:"−"}.battery-summary-title{display:flex;align-items:center;gap:11px;min-width:0}.battery-summary-title i{display:grid;place-items:center;width:34px;height:34px;flex:0 0 auto;color:#fff;background:#24765b;border-radius:9px;font-style:normal}.battery-summary-title strong{display:block;color:#183d31;font-size:13px}.battery-summary-title small{display:block;margin-top:2px;color:#6d7c75;font-size:10px}.battery-body{padding:16px;border-top:1px solid #dbe5e0}.battery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.battery-field{display:block;padding:10px;background:#f7faf8;border:1px solid #e0e8e4;border-radius:9px}.battery-field span{display:block;color:#607168;font-size:9px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}.battery-field input,.battery-field select{width:100%;height:34px;margin-top:4px;padding:0 8px;color:#173d31;background:#fff;border:1px solid #c8d5cf;border-radius:7px;font-weight:800}.battery-results{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:12px}.battery-result{padding:10px 11px;background:#eff7f3;border-radius:9px}.battery-result span{display:block;color:#718079;font-size:8px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}.battery-result strong{display:block;margin-top:3px;color:#17664e;font-size:13px}.battery-topology{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}.battery-equation,.battery-safety{padding:12px 14px;border-radius:10px}.battery-equation{color:#21483a;background:#eaf5f0;border:1px solid #c9e1d6}.battery-equation strong{display:block;font-size:16px}.battery-equation small{display:block;margin-top:5px;color:#5e7369}.battery-safety{color:#72541d;background:#fff8e8;border:1px solid #ead7a8;font-size:10px;line-height:1.45}.battery-safety strong{color:#62450e}.battery-norms{margin-top:11px;color:#687970;font-size:10px;line-height:1.5}.battery-norms a{color:#176b51;font-weight:800}.battery-cells{display:flex;flex-wrap:wrap;gap:5px;margin-top:9px}.battery-cell{min-width:35px;padding:5px 7px;color:#fff;background:#39765f;border-radius:5px;text-align:center;font-size:9px;font-weight:900}.battery-cell:nth-child(even){background:#2d604d}.solar-accordion summary{background:linear-gradient(90deg,#eef7fb,#fbfdfd)}.solar-accordion .battery-summary-title i{background:#26769d}.solar-accordion summary:after{color:#1e6687;background:#dfeff6}.solar-field{display:block;padding:10px;background:#f6fafc;border:1px solid #dce8ed;border-radius:9px}.solar-field span{display:block;color:#58717d;font-size:9px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}.solar-field input{width:100%;height:34px;margin-top:4px;padding:0 8px;color:#163b4b;background:#fff;border:1px solid #c5d6de;border-radius:7px;font-weight:800}.solar-result{padding:10px 11px;background:#edf6fa;border-radius:9px}.solar-result span{display:block;color:#657d87;font-size:8px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}.solar-result strong{display:block;margin-top:3px;color:#1d6688;font-size:13px}.solar-topology{display:grid;grid-template-columns:1.2fr .8fr;gap:10px;margin-top:12px}.solar-diagram,.solar-safety{padding:12px 14px;border-radius:10px}.solar-diagram{overflow-x:auto;color:#173f51;background:#eaf5fa;border:1px solid #c9dfe9}.solar-diagram>strong{display:block;font-size:16px}.solar-diagram>small{display:block;margin-top:5px;color:#5f7480}.solar-safety{color:#72541d;background:#fff8e8;border:1px solid #ead7a8;font-size:10px;line-height:1.45}.pv-strings{display:grid;gap:6px;max-height:235px;margin-top:10px;padding-right:4px;overflow:auto}.pv-string-line{display:flex;align-items:center;gap:4px;padding:5px 7px;background:rgba(255,255,255,.7);border-radius:7px}.pv-string-label{width:42px;flex:0 0 auto;color:#315d70;font-size:9px;font-weight:900}.pv-module{width:18px;height:26px;flex:0 0 auto;border:1px solid #194e72;border-radius:2px;background-color:#317da9;background-image:linear-gradient(rgba(255,255,255,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px);background-size:100% 6px,6px 100%;box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}.pv-more{color:#315d70;font-size:9px;font-weight:900}.pv-window-ok{color:#176c52!important}.pv-window-warn{color:#a1433d!important}.solar-norms{margin-top:11px;color:#687970;font-size:10px;line-height:1.5}.solar-norms a{color:#176b79;font-weight:800}.pv-flow{display:grid;grid-template-columns:auto 48px 48px minmax(110px,1fr) auto minmax(90px,1fr) 78px minmax(75px,1fr);gap:5px;align-items:center;margin-top:11px;padding-top:10px;border-top:1px solid #c9dfe9}.pv-flow-node{padding:7px 8px;color:#164459;background:#fff;border:1px solid #b9d2de;border-radius:7px;text-align:center;font-size:9px;font-weight:900}.pv-flow-node small{font-size:7px;font-weight:700}.pv-flow-wire{height:5px;border-radius:4px;text-align:center;font-size:7px;font-style:normal;font-weight:900;line-height:18px}.pv-flow-wire.positive{color:#b9322e;background:#d84b43}.pv-flow-wire.negative{color:#252d31;background:#343e43}.pv-flow-wire.ac{height:auto;padding:5px 3px;color:#fff;background:linear-gradient(90deg,#c9443e 0 25%,#263038 25% 50%,#2e6591 50% 75%,#46a2d0 75%);line-height:1.1}.pv-flow-arrow{color:#28718f;font-weight:900;text-align:center}.pv-architectures{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:11px}.pv-arch-card{padding:12px 14px;background:#fafcfc;border:1px solid #d8e4e0;border-radius:10px}.pv-arch-card.active{background:#eff8f4;border-color:#a9d4c3}.pv-arch-card>span{display:block;color:#718079;font-size:8px;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.pv-arch-card>strong{display:block;margin-top:3px;color:#185f48;font-size:14px}.pv-arch-card>small{display:block;margin-top:7px;color:#66776f;font-size:9px;line-height:1.4}.pv-arch-chain{display:flex;align-items:center;gap:5px;margin-top:9px;overflow-x:auto}.pv-arch-chain b{flex:0 0 auto;padding:5px 7px;color:#274b3f;background:#fff;border:1px solid #d1dfd9;border-radius:6px;font-size:8px}.pv-arch-chain i{color:#348568;font-style:normal;font-weight:900}.pv-module{position:relative;cursor:help;transition:transform .15s,box-shadow .15s}.pv-module:hover{transform:translateY(-2px);box-shadow:0 3px 8px rgba(25,78,114,.35),inset 0 0 0 1px rgba(255,255,255,.2)}@media(max-width:980px){.solar-topology{grid-template-columns:1fr}}.spda-accordion summary{background:linear-gradient(90deg,#f7f2fb,#fdfcfe)}.spda-accordion .battery-summary-title i{background:#725492}.spda-accordion summary:after{color:#624584;background:#eee5f5}.spda-field{display:block;padding:10px;background:#faf8fc;border:1px solid #e4ddeb;border-radius:9px}.spda-field span{display:block;color:#6f607c;font-size:9px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}.spda-field input,.spda-field select{width:100%;height:34px;margin-top:4px;padding:0 8px;color:#3d2c4d;background:#fff;border:1px solid #d5c9df;border-radius:7px;font-weight:800}.spda-result{padding:10px 11px;background:#f4eff8;border-radius:9px}.spda-result span{display:block;color:#776a81;font-size:8px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}.spda-result strong{display:block;margin-top:3px;color:#68498a;font-size:13px}.spda-visual{display:grid;grid-template-columns:1fr 310px;gap:10px;margin-top:12px}.spda-scene{position:relative;min-height:245px;overflow:hidden;background:linear-gradient(#edf6fb 0 66%,#d8ead2 66%);border:1px solid #d5e1df;border-radius:11px}.spda-lightning{position:absolute;top:13px;left:50%;color:#e2a21a;font-size:50px;filter:drop-shadow(0 0 7px rgba(226,162,26,.45));transform:translateX(-50%)}.spda-building{position:absolute;left:18%;right:18%;bottom:45px;height:125px;background:#f8faf9;border:2px solid #9daea6;border-top:0}.spda-roof{position:absolute;left:14%;right:14%;bottom:170px;height:25px;border:4px solid #725492;border-bottom:0;transform:skewX(-18deg)}.spda-mesh{position:absolute;left:22%;right:22%;bottom:176px;height:14px;background:repeating-linear-gradient(90deg,transparent 0 22px,rgba(114,84,146,.55) 22px 24px),repeating-linear-gradient(0deg,transparent 0 7px,rgba(114,84,146,.55) 7px 9px)}.spda-captor{position:absolute;left:50%;bottom:193px;width:4px;height:32px;background:#725492;transform:translateX(-50%)}.spda-captor:before{content:"";position:absolute;top:-5px;left:-3px;width:10px;height:10px;background:#e2a21a;border-radius:50%}.spda-down{position:absolute;bottom:43px;width:4px;height:130px;background:#725492}.spda-down.left{left:18%}.spda-down.right{right:18%}.spda-ring{position:absolute;left:12%;right:12%;bottom:31px;height:16px;border:4px solid #8b643c;border-radius:50%}.spda-bep{position:absolute;right:28%;bottom:56px;padding:3px 5px;color:#fff;background:#327d5e;border-radius:4px;font-size:8px;font-weight:900}.spda-label{position:absolute;padding:3px 5px;color:#4d4059;background:rgba(255,255,255,.88);border-radius:4px;font-size:8px;font-weight:800}.spda-label.top{top:54px;left:55%}.spda-label.side{top:132px;right:3%}.spda-label.ground{bottom:5px;left:36%}.spda-checks{display:grid;gap:7px;padding:12px;background:#fbfafc;border:1px solid #e4ddeb;border-radius:11px}.spda-check{display:flex;gap:8px;align-items:flex-start;padding:7px 8px;background:#fff;border-radius:7px;color:#5e5267;font-size:9px;line-height:1.35}.spda-check:before{content:"✓";display:grid;place-items:center;width:17px;height:17px;flex:0 0 auto;color:#fff;background:#725492;border-radius:50%;font-weight:900}.spda-warning{margin-top:10px;padding:11px 13px;color:#72541d;background:#fff8e8;border:1px solid #ead7a8;border-radius:10px;font-size:10px;line-height:1.45}.spda-norms{margin-top:11px;color:#687970;font-size:10px;line-height:1.5}.spda-norms a{color:#68498a;font-weight:800}@media(max-width:980px){.spda-visual{grid-template-columns:1fr}}@keyframes meterPulse{70%{box-shadow:0 0 0 7px rgba(72,228,159,0)}}@keyframes simCurrent{to{stroke-dashoffset:-32}}@media(max-width:980px){.battery-grid{grid-template-columns:repeat(2,1fr)}.battery-results{grid-template-columns:repeat(2,1fr)}.battery-topology{grid-template-columns:1fr}.sim-toolbar{grid-template-columns:1fr}.sim-actions{justify-content:flex-start}.sim-inspector{grid-template-columns:1fr 1fr}.wm-wrap{grid-template-columns:1fr}.wm-side{display:grid;grid-template-columns:repeat(3,1fr)}.cable-controls,.cable-summary{grid-template-columns:1fr 1fr}}@media(max-width:620px){.pv-architectures{grid-template-columns:1fr}.pv-flow{grid-template-columns:auto 35px 35px minmax(92px,1fr) auto minmax(76px,1fr) 60px minmax(65px,1fr)}.battery-grid,.battery-results{grid-template-columns:1fr}.battery-accordion summary{align-items:flex-start}.sim-actions .btn{flex:1 1 42%}.sim-inspector{grid-template-columns:1fr}.sim-readout{align-items:flex-start}.wm-side{grid-template-columns:1fr}.wm-head,.wm-phase{grid-template-columns:34px repeat(3,1fr);gap:4px}.wm-phase output{font-size:14px}.wm-totals{grid-template-columns:1fr 1fr}.cable-controls,.cable-summary{grid-template-columns:1fr}}.dynamic-block-panel{margin-top:12px;padding:13px;border:1px solid #cfe0d8;border-radius:12px;background:linear-gradient(135deg,#f7fbf9,#eef7f3)}.dynamic-block-head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:10px}.dynamic-block-head span{color:#214b3d;font-size:11px;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.dynamic-block-head small{color:#718078;font-size:9px}.dynamic-block-flow{display:flex;align-items:stretch;gap:6px;padding:2px 1px 8px;overflow-x:auto}.dynamic-block{min-width:126px;flex:1 0 126px;padding:10px 8px;color:#25483d;background:#fff;border:1px solid #c9d9d2;border-radius:9px;cursor:pointer;text-align:center;transition:transform .16s,border-color .16s,box-shadow .16s}.dynamic-block:hover,.dynamic-block:focus-visible{transform:translateY(-2px);border-color:#4a9b7d;box-shadow:0 5px 14px rgba(28,94,70,.12);outline:none}.dynamic-block.active{color:#fff;background:#246d55;border-color:#246d55;box-shadow:0 6px 16px rgba(28,94,70,.2)}.dynamic-block i{display:grid;place-items:center;width:27px;height:27px;margin:0 auto 5px;color:#fff;background:#438c71;border-radius:7px;font-style:normal;font-weight:900}.dynamic-block.active i{color:#246d55;background:#dff2e9}.dynamic-block span,.dynamic-block strong{display:block}.dynamic-block span{font-size:8px;font-weight:900;letter-spacing:.04em;text-transform:uppercase}.dynamic-block strong{margin-top:3px;font-size:10px}.block-arrow{align-self:center;flex:0 0 15px;color:#3a9270;text-align:center;animation:blockPulse 1.3s ease-in-out infinite}.block-arrow.branch{color:#725492}.dynamic-branches{display:flex;flex-wrap:wrap;gap:5px;margin-top:3px}.dynamic-branch{padding:5px 7px;color:#2b5a49;background:#fff;border:1px solid #cbdcd4;border-radius:6px;font-size:8px;font-weight:900;cursor:pointer}.dynamic-branch:hover{border-color:#489779;background:#eef8f3}.dynamic-block-detail{display:grid;grid-template-columns:150px 1fr;gap:10px;margin-top:9px;padding:10px 12px;color:#315448;background:#fff;border-left:4px solid #2d8062;border-radius:8px;font-size:10px}.dynamic-block-detail strong{color:#1d5b45}.spda-block-panel{border-color:#ded2e7;background:linear-gradient(135deg,#fbf9fc,#f3edf8)}.spda-block-panel .dynamic-block-head span{color:#5d4377}.spda-block-panel .dynamic-block.active{background:#725492;border-color:#725492}.spda-block-panel .dynamic-block i{background:#876aa4}.spda-block-panel .dynamic-block.active i{color:#725492;background:#f2eaf8}.spda-block-panel .dynamic-block-detail{color:#5b4b67;border-left-color:#725492}.spda-block-panel .dynamic-block-detail strong{color:#68498a}.spda-block-panel.risk-pending{box-shadow:inset 0 0 0 2px rgba(214,157,38,.18)}.spda-block-panel.risk-waived{opacity:.72}.spda-block-panel.risk-waived .block-arrow{animation:none}.dynamic-block-panel.is-updating .dynamic-block.active{animation:blockRefresh .35s ease}@keyframes blockPulse{50%{opacity:.45;transform:translateX(3px)}}@keyframes blockRefresh{50%{transform:scale(.97)}}@media(max-width:620px){.dynamic-block-head{align-items:flex-start;flex-direction:column}.dynamic-block{min-width:118px;flex-basis:118px}.dynamic-block-detail{grid-template-columns:1fr;gap:3px}}@media print{.sim-actions,.sim-hint,.sim-tooltip,.sim-readout,.battery-grid,.battery-topology,.battery-norms,.spda-visual,.spda-warning,.spda-norms,.solar-topology,.solar-safety,.solar-norms,.cable-controls,.cable-note,.dynamic-branches,.dynamic-block-detail{display:none!important}details{break-inside:avoid;margin:2mm 0!important}details>summary{padding:2mm 3mm!important}details[open]>.battery-body{display:block!important}.battery-body{padding:2mm!important}.battery-results{grid-template-columns:repeat(8,1fr)!important;gap:1mm!important;margin-top:2mm!important}.battery-result,.spda-result,.solar-result{padding:1.5mm!important}.battery-result strong,.spda-result strong,.solar-result strong{font-size:9px!important}.dynamic-block-panel{margin-top:2mm;padding:2mm}.dynamic-block-head{margin-bottom:1.5mm}.dynamic-block-flow{gap:1mm;padding:0;overflow:visible}.dynamic-block{min-width:0;flex:1 1 0;padding:2mm 1mm}.dynamic-block i{width:5mm;height:5mm;margin-bottom:1mm}.dynamic-block span{font-size:6px}.dynamic-block strong{font-size:7px}.block-arrow{flex-basis:3mm}.wm-wrap{grid-template-columns:1.35fr .65fr;gap:2mm;margin:0 0 2mm}.wm-meter{padding:2mm;border-width:2px}.wm-display{padding:2mm}.wm-phase{min-height:6mm}.wm-phase output{font-size:11px}.wm-side{grid-template-columns:repeat(3,1fr);gap:1mm}.wm-stat{padding:1.5mm}.wm-stat strong{font-size:10px}.wm-side>.btn{display:none}.sim-inspector{grid-template-columns:repeat(4,1fr);gap:1mm;margin-top:2mm}.sim-state-card{padding:1.5mm}.sim-canvas{overflow:hidden;break-inside:avoid}.sim-canvas svg{min-width:0;width:100%;height:auto}.cable-panel{overflow:visible}.cable-table-wrap{overflow:visible}.cable-table{min-width:0!important;width:100%;table-layout:fixed}.cable-summary{gap:1mm!important;padding:1mm!important}.cable-summary div{padding:1mm!important}.cable-summary strong{font-size:8px!important}#cabos{padding-top:2mm!important}#cabos .section-head{margin-bottom:1mm}.cable-table th,.cable-table td{padding:.55mm .5mm;font-size:5.5px}.cable-table input{width:100%;font-size:5.5px}.cable-size{font-size:6.5px}.cable-badge{padding:.35mm .8mm;font-size:5.5px}}
  `;

  const style = document.createElement('style');
  style.id = 'qgbt-simulator-style';
  style.textContent = css;
  document.head.appendChild(style);

  const panel = document.querySelector('#unifilar .diagram-panel');
  if (!panel) return;

  const breaker = (x, y, w, h, key, title, valueId, value, kind = '') => `
    <g class="sim-device ${kind}" data-breaker="${key}" tabindex="0" role="switch" aria-checked="true" aria-label="${title}">
      <rect class="device-body" x="${x}" y="${y}" width="${w}" height="${h}" rx="11"/>
      <path class="device-head" d="M${x+11} ${y}h${w-22}a11 11 0 0 1 11 11v16h-${w}v-16a11 11 0 0 1 11-11z"/>
      <text class="dev-title" x="${x+w/2}" y="${y+18}">${title}</text>
      <rect class="breaker-slot" x="${x+w/2-11}" y="${y+35}" width="22" height="34" rx="4"/>
      <rect class="breaker-lever" x="${x+w/2-8}" y="${y+39}" width="16" height="11" rx="2"/>
      <text class="breaker-state" data-state-label="${key}" x="${x+w/2}" y="${y+h-25}">LIGADO</text>
      <text class="dev-value" ${valueId ? `id="${valueId}"` : ''} x="${x+w/2}" y="${y+h-10}">${value}</text>
    </g>`;

  panel.innerHTML = `
    <div class="sim-toolbar">
      <div class="legend">
        <span><i style="background:#c9443e"></i>L1</span><span><i style="background:#263038"></i>L2</span><span><i style="background:#2e6591"></i>L3</span><span><i style="background:#46a2d0"></i>Neutro</span><span><i style="background:#568e43"></i>PE/terra</span><span><i style="background:#e04d3f"></i>+ CC</span><span><i style="background:#3a4248"></i>− CC</span>
      </div>
      <div class="sim-actions">
        <button class="btn" id="toggleSun">☀ Sol presente</button>
        <button class="btn" id="toggleFlow">Pausar animação</button>
        <button class="btn danger" id="allOff">Desligar tudo</button>
        <button class="btn success" id="allOn">Religar todos</button>
      </div>
    </div>
    <div class="sim-readout" id="simReadout">Barramentos energizados pela concessionária. Solar injetando no QGBT.</div>
    <div class="wm-wrap" aria-label="Wattímetro CA virtual">
      <section class="wm-meter">
        <div class="wm-top"><strong id="wmModeTitle">WATTÍMETRO 3F + N · SIMULAÇÃO</strong><span class="wm-live">AO VIVO</span><div class="wm-terminals"><i>A</i><i>B</i><i>C</i><i>N</i></div></div>
        <div class="wm-display">
          <div class="wm-head"><span>FASE</span><span>V</span><span>A</span><span>kW</span></div>
          <div class="wm-phase"><b>A</b><output class="wm-v" id="wmVA">219,4</output><output class="wm-a" id="wmIA">0,0</output><output class="wm-kw" id="wmPA">0,00</output></div>
          <div class="wm-phase"><b>B</b><output class="wm-v" id="wmVB">219,4</output><output class="wm-a" id="wmIB">0,0</output><output class="wm-kw" id="wmPB">0,00</output></div>
          <div class="wm-phase"><b>C</b><output class="wm-v" id="wmVC">219,4</output><output class="wm-a" id="wmIC">0,0</output><output class="wm-kw" id="wmPC">0,00</output></div>
          <div class="wm-totals"><div class="wm-total"><span>Energia líquida</span><strong id="wmEnergy">0,000 kWh</strong></div><div class="wm-total"><span>Potência reativa</span><strong id="wmQ">0,00 kVAr</strong></div><div class="wm-total"><span>Potência aparente</span><strong id="wmS">0,00 kVA</strong></div><div class="wm-total"><span>Fator de potência</span><strong id="wmPF">1,00</strong></div></div>
          <div class="wm-bottom"><span><strong>60,0 Hz</strong> · valores RMS calculados</span><span id="wmDirection">SEM CARGA</span></div>
        </div>
      </section>
      <aside class="wm-side">
        <div class="wm-stat"><span>Potência das cargas</span><strong id="wmLoadPower">0,00 kW</strong><small>Soma dos circuitos ligados</small></div>
        <div class="wm-stat"><span>Geração fotovoltaica</span><strong id="wmSolarPower">0,00 kW</strong><small id="wmSolarMode">Injeção conforme fornecimento</small></div>
        <div class="wm-stat"><span>Fluxo na concessionária</span><strong id="wmGridPower">0,00 kW</strong><small id="wmGridCaption">sem intercâmbio</small></div>
        <label class="wm-stat wm-demand"><span>Demanda simultânea</span><output id="wmLoadFactorValue">100%</output><input id="wmLoadFactor" type="range" min="0" max="150" step="5" value="100"><small>Varia cargas, correntes e potência em tempo real.</small></label>
        <button class="btn" id="resetEnergy">Zerar energia acumulada</button>
      </aside>
    </div>
    <details class="battery-accordion solar-accordion" id="solarArray">
      <summary><span class="battery-summary-title"><i>☀</i><span><strong>Arranjo de placas solares · strings série/paralelo</strong><small id="pvSummary">91 módulos · 50,1 kWp · 13S × 7P</small></span></span></summary>
      <div class="battery-body">
        <div class="battery-grid">
          <label class="solar-field"><span>Potência-alvo FV (kWp)</span><input id="pvTargetPower" type="number" min="0" step="0.1" value="50"></label>
          <label class="solar-field"><span>Potência do módulo (Wp)</span><input id="pvModulePower" type="number" min="1" step="1" value="550"></label>
          <label class="solar-field"><span>Voc do módulo (V)</span><input id="pvVoc" type="number" min="1" step="0.1" value="49.5"></label>
          <label class="solar-field"><span>Vmp do módulo (V)</span><input id="pvVmp" type="number" min="1" step="0.1" value="41.5"></label>
          <label class="solar-field"><span>Isc do módulo (A)</span><input id="pvIsc" type="number" min="0.1" step="0.1" value="13.8"></label>
          <label class="solar-field"><span>Vcc máxima do inversor (V)</span><input id="pvVdcMax" type="number" min="1" step="1" value="1000"></label>
          <label class="solar-field"><span>MPPT mínimo do inversor (V)</span><input id="pvMpptMin" type="number" min="1" step="1" value="200"></label>
        </div>
        <div class="battery-results">
          <div class="solar-result"><span>Configuração</span><strong id="pvConfiguration">13S × 7P</strong></div>
          <div class="solar-result"><span>Total de módulos</span><strong id="pvModules">91</strong></div>
          <div class="solar-result"><span>Potência instalada</span><strong id="pvInstalled">50,1 kWp</strong></div>
          <div class="solar-result"><span>Vmp da string</span><strong id="pvStringVmp">539,5 V</strong></div>
          <div class="solar-result"><span>Voc corrigida a frio</span><strong id="pvStringVoc">686,7 V</strong></div>
          <div class="solar-result"><span>Corrente de projeto do arranjo</span><strong id="pvArrayCurrent">120,8 A</strong></div>
          <div class="solar-result"><span>Proteções CC estimadas</span><strong id="pvProtection">20 A/string · 125 A geral</strong></div>
          <div class="solar-result"><span>Janela de módulos/string</span><strong id="pvWindow" class="pv-window-ok">6 a 18 · compatível</strong></div>
        </div>
        <div class="solar-topology">
          <div class="solar-diagram"><strong id="pvFormula">13 módulos em série × 7 strings em paralelo</strong><small>Série eleva a tensão; strings paralelas somam corrente e potência.</small><div class="pv-strings" id="pvStrings" aria-label="Representação das strings fotovoltaicas"></div><div class="pv-flow" aria-label="Fluxo do arranjo até o QGBT"><span class="pv-flow-node" data-pv-flow="strings">STRINGS</span><span class="pv-flow-wire positive">+ CC</span><span class="pv-flow-wire negative">− CC</span><span class="pv-flow-node" data-pv-flow="box">STRING BOX<br><small>fusível · DPS · chave</small></span><span class="pv-flow-arrow">→</span><span class="pv-flow-node" data-pv-flow="inverter">INVERSOR<br><small>CC → CA</small></span><span class="pv-flow-wire ac">3F + N + PE</span><span class="pv-flow-node" data-pv-flow="qgbt">DJ SOLAR<br><small>QGBT</small></span></div></div>
          <div class="solar-safety"><strong>Atenção:</strong> conferir na ficha do inversor a tensão máxima absoluta, faixa MPPT, corrente máxima por MPPT, quantidade de entradas e corrente de curto-circuito admitida. Fusível por string depende do número de strings paralelas e do “maximum series fuse rating” do módulo. Prever cabos solares, conectores compatíveis, DPS CC, seccionamento e equipotencialização.</div>
        </div>
        <div class="pv-architectures">
          <article class="pv-arch-card active"><span>Arquitetura usada neste cálculo</span><strong>Inversor string</strong><div class="pv-arch-chain"><b>Placas em série</b><i>→</i><b>String box CC</b><i>→</i><b>Inversor central</b><i>→</i><b>QGBT</b></div><small>Os cálculos 13S × 7P, Voc, Vmp e cabos CC pertencem a esta arquitetura.</small></article>
          <article class="pv-arch-card"><span>Arquitetura da imagem enviada</span><strong>Microinversores</strong><div class="pv-arch-chain"><b>1–4 placas</b><i>→</i><b>Microinversor</b><i>→</i><b>Tronco CA</b><i>→</i><b>QGBT</b></div><small>Não utiliza uma grande string CC central. Quantidade por ramal, corrente CA e disjuntor dependem do modelo do microinversor.</small></article>
        </div>
        <p class="solar-norms">Cálculo preliminar com fator de frio de 1,0675 para Voc e fator de calor de 0,8425 para Vmp; o projeto deve substituir esses fatores pelos coeficientes de temperatura da ficha técnica e pelas temperaturas extremas do local. Verificar ABNT NBR 16690 e as referências atuais <a href="https://webstore.iec.ch/en/publication/64171" target="_blank" rel="noopener">IEC 62548-1:2023 + AMD1:2025</a> e <a href="https://webstore.iec.ch/en/publication/65748" target="_blank" rel="noopener">IEC 60364-7-712:2025</a>.</p>
      </div>
    </details>
    <details class="battery-accordion" id="batteryBank">
      <summary><span class="battery-summary-title"><i>▥</i><span><strong>Banco de baterias BESS · cálculo preliminar</strong><small id="bessSummary">16 módulos · 81,9 kWh · 409,6 V</small></span></span></summary>
      <div class="battery-body">
        <div class="battery-grid">
          <label class="battery-field"><span>Tecnologia</span><select id="bessChemistry"><option value="lfp">Lítio LFP</option><option value="nmc">Lítio NMC</option><option value="agm">Chumbo AGM/VRLA</option></select></label>
          <label class="battery-field"><span>Tensão do módulo (V)</span><input id="bessModuleV" type="number" min="1" step="0.1" value="51.2"></label>
          <label class="battery-field"><span>Capacidade do módulo (Ah)</span><input id="bessModuleAh" type="number" min="1" step="1" value="100"></label>
          <label class="battery-field"><span>Tensão-alvo do banco (Vcc)</span><input id="bessTargetV" type="number" min="12" step="1" value="384"></label>
          <label class="battery-field"><span>Carga crítica (kW)</span><input id="bessLoadKw" type="number" min="0.1" step="0.1" value="20"></label>
          <label class="battery-field"><span>Autonomia desejada (h)</span><input id="bessAutonomyH" type="number" min="0.1" step="0.1" value="2"></label>
          <label class="battery-field"><span>Profundidade de descarga — DoD (%)</span><input id="bessDod" type="number" min="10" max="100" step="1" value="80"></label>
          <label class="battery-field"><span>Eficiência CC/CA total (%)</span><input id="bessEfficiency" type="number" min="10" max="100" step="1" value="92"></label>
          <label class="battery-field"><span>Margem de projeto (%)</span><input id="bessMargin" type="number" min="0" max="100" step="1" value="20"></label>
        </div>
        <div class="battery-results">
          <div class="battery-result"><span>Configuração</span><strong id="bessConfiguration">8S × 2P</strong></div>
          <div class="battery-result"><span>Total de módulos</span><strong id="bessModules">16</strong></div>
          <div class="battery-result"><span>Banco nominal</span><strong id="bessVoltage">409,6 V · 200 Ah</strong></div>
          <div class="battery-result"><span>Energia instalada</span><strong id="bessNominal">81,9 kWh</strong></div>
          <div class="battery-result"><span>Energia útil CA</span><strong id="bessUsable">60,3 kWh</strong></div>
          <div class="battery-result"><span>Autonomia calculada</span><strong id="bessAutonomy">3,0 h</strong></div>
          <div class="battery-result"><span>Corrente do banco</span><strong id="bessBankCurrent">53,1 A</strong></div>
          <div class="battery-result"><span>BMS / proteção</span><strong id="bessProtection">BMS 50 A · geral 80 A</strong></div>
        </div>
        <div class="dynamic-block-panel bess-block-panel" id="bessBlockDiagram" aria-label="Diagrama dinâmico do banco de baterias">
          <div class="dynamic-block-head"><span>Fluxo funcional do BESS</span><small>Clique em um bloco para ver sua função</small></div>
          <div class="dynamic-block-flow">
            <button type="button" class="dynamic-block active" data-bess-block="bank"><i>▥</i><span>Banco CC</span><strong id="bessBlockBank">8S × 2P</strong></button><b class="block-arrow">→</b>
            <button type="button" class="dynamic-block" data-bess-block="branch"><i>⎓</i><span>Proteção por ramal</span><strong id="bessBlockBranch">BMS 50 A</strong></button><b class="block-arrow">→</b>
            <button type="button" class="dynamic-block" data-bess-block="main"><i>▣</i><span>Proteção geral CC</span><strong id="bessBlockMain">80 A</strong></button><b class="block-arrow">→</b>
            <button type="button" class="dynamic-block" data-bess-block="pcs"><i>↯</i><span>PCS / inversor híbrido</span><strong id="bessBlockPcs">20 kW</strong></button><b class="block-arrow">→</b>
            <button type="button" class="dynamic-block" data-bess-block="load"><i>⌂</i><span>Cargas críticas</span><strong id="bessBlockLoad">2,0 h</strong></button>
          </div>
          <div class="dynamic-branches" id="bessBranchBlocks" aria-label="Ramais paralelos do banco"></div>
          <div class="dynamic-block-detail" id="bessBlockDetail"><strong>Banco CC</strong><span>Os módulos em série elevam a tensão e os ramais em paralelo aumentam a capacidade em Ah e kWh.</span></div>
        </div>
        <div class="battery-topology">
          <div class="battery-equation"><strong id="bessFormula">8 em série × 2 ramais em paralelo = 16 módulos</strong><small>Série eleva a tensão; paralelo eleva Ah, corrente disponível e energia. Cada ramal deve usar módulos idênticos.</small><div class="battery-cells" id="bessCells" aria-label="Representação dos módulos"></div></div>
          <div class="battery-safety"><strong>Atenção:</strong> o BESS não deve ser conectado diretamente a inversor exclusivamente on-grid. Exige inversor híbrido/PCS compatível, BMS, fusível ou disjuntor CC por ramal, seccionamento geral CC, monitoramento térmico e limites de série/paralelo autorizados pelo fabricante. AGM/VRLA requer ventilação adequada.</div>
        </div>
        <p class="battery-norms">Estimativa energética — não substitui projeto executivo. Verificar ABNT NBR 5410, ABNT NBR 16976, requisitos do fabricante e do Corpo de Bombeiros local; para segurança de baterias estacionárias, considerar <a href="https://webstore.iec.ch/en/publication/64073" target="_blank" rel="noopener">IEC 62619:2022</a> e, para sistema de armazenamento integrado à rede, <a href="https://webstore.iec.ch/en/publication/72239" target="_blank" rel="noopener">IEC 62933-5-1:2024</a>. Corrente de curto-circuito, seletividade, coordenação, cabo CC e proteção contra incêndio exigem dados do equipamento e responsável habilitado.</p>
      </div>
    </details>
    <details class="battery-accordion spda-accordion" id="spdaPanel">
      <summary><span class="battery-summary-title"><i>ϟ</i><span><strong>SPDA · proteção contra descargas atmosféricas</strong><small id="spdaSummary">Pré-estudo geométrico · nível III · análise de risco pendente</small></span></span></summary>
      <div class="battery-body">
        <div class="battery-grid">
          <label class="spda-field"><span>Resultado da análise de risco</span><select id="spdaRisk"><option value="pending">Pendente — ainda não realizada</option><option value="required">SPDA requerido pela análise</option><option value="waived">SPDA dispensado pela análise</option></select></label>
          <label class="spda-field"><span>Nível de proteção adotado</span><select id="spdaLevel"><option value="1">I — proteção mais rigorosa</option><option value="2">II</option><option value="3" selected>III</option><option value="4">IV</option></select></label>
          <label class="spda-field"><span>Comprimento da edificação (m)</span><input id="spdaLength" type="number" min="1" step="0.5" value="30"></label>
          <label class="spda-field"><span>Largura da edificação (m)</span><input id="spdaWidth" type="number" min="1" step="0.5" value="20"></label>
          <label class="spda-field"><span>Altura da edificação (m)</span><input id="spdaHeight" type="number" min="1" step="0.5" value="10"></label>
        </div>
        <div class="battery-results">
          <div class="spda-result"><span>Situação do estudo</span><strong id="spdaStatus">Análise de risco obrigatória</strong></div>
          <div class="spda-result"><span>Raio da esfera rolante</span><strong id="spdaSphere">45 m</strong></div>
          <div class="spda-result"><span>Malha máxima de captação</span><strong id="spdaMesh">15 × 15 m</strong></div>
          <div class="spda-result"><span>Espaçamento típico entre descidas</span><strong id="spdaSpacing">15 m</strong></div>
          <div class="spda-result"><span>Quantidade geométrica de descidas</span><strong id="spdaDowns">7 descidas</strong></div>
          <div class="spda-result"><span>Perímetro / anel de aterramento</span><strong id="spdaPerimeter">100 m</strong></div>
          <div class="spda-result"><span>Condutor estimado na cobertura</span><strong id="spdaRoofConductor">150 m</strong></div>
          <div class="spda-result"><span>Captação + descidas</span><strong id="spdaTotalConductor">220 m</strong></div>
        </div>
        <div class="dynamic-block-panel spda-block-panel" id="spdaBlockDiagram" aria-label="Diagrama dinâmico do SPDA">
          <div class="dynamic-block-head"><span>Caminho funcional do SPDA</span><small>Clique em um bloco para ver sua função</small></div>
          <div class="dynamic-block-flow">
            <button type="button" class="dynamic-block active" data-spda-block="capture"><i>ϟ</i><span>Captação</span><strong id="spdaBlockCapture">Nível III</strong></button><b class="block-arrow">→</b>
            <button type="button" class="dynamic-block" data-spda-block="mesh"><i>▦</i><span>Malha</span><strong id="spdaBlockMesh">15 × 15 m</strong></button><b class="block-arrow">→</b>
            <button type="button" class="dynamic-block" data-spda-block="downs"><i>⇣</i><span>Descidas</span><strong id="spdaBlockDowns">7 unidades</strong></button><b class="block-arrow">→</b>
            <button type="button" class="dynamic-block" data-spda-block="bep"><i>≡</i><span>BEP</span><strong>Equipotencialização</strong></button><b class="block-arrow">→</b>
            <button type="button" class="dynamic-block" data-spda-block="earth"><i>⏚</i><span>Aterramento</span><strong id="spdaBlockEarth">100 m</strong></button><b class="block-arrow branch">＋</b>
            <button type="button" class="dynamic-block" data-spda-block="spd"><i>↯</i><span>DPS coordenados</span><strong>CA + CC</strong></button>
          </div>
          <div class="dynamic-branches" id="spdaDownBlocks" aria-label="Descidas estimadas"></div>
          <div class="dynamic-block-detail" id="spdaBlockDetail"><strong>Captação</strong><span>Intercepta a descarga por malha, esfera rolante ou ângulo de proteção, conforme o nível adotado.</span></div>
        </div>
        <div class="spda-visual">
          <div class="spda-scene" aria-label="Esquema do SPDA externo"><div class="spda-lightning">ϟ</div><div class="spda-roof"></div><div class="spda-mesh"></div><div class="spda-captor"></div><div class="spda-building"></div><div class="spda-down left"></div><div class="spda-down right"></div><div class="spda-ring"></div><span class="spda-bep">BEP</span><span class="spda-label top">captação · esfera rolante / malha</span><span class="spda-label side">descidas</span><span class="spda-label ground">anel de aterramento</span></div>
          <div class="spda-checks">
            <div class="spda-check">Captação posicionada por esfera rolante, malha ou ângulo de proteção, conforme aplicável.</div>
            <div class="spda-check">No mínimo duas descidas, distribuídas no perímetro e interligadas ao sistema de aterramento.</div>
            <div class="spda-check">Estruturas metálicas e molduras dos módulos FV avaliadas para equipotencialização e distância de separação.</div>
            <div class="spda-check">BEP interliga SPDA, PE, aterramento elétrico e partes metálicas conforme projeto.</div>
            <div class="spda-check">DPS coordenados: entrada de energia, QGBT, circuitos sensíveis e lados CA/CC do sistema FV.</div>
            <div class="spda-check">Inspeção, continuidade, registros, “como construído” e manutenção periódica previstos.</div>
          </div>
        </div>
        <div class="spda-warning"><strong>SPDA não é apenas DPS.</strong> O SPDA externo intercepta e conduz a descarga até o aterramento; as medidas internas reduzem centelhamentos e surtos. O programa não determina sozinho se o SPDA é obrigatório, não calcula distância de separação nem substitui a análise completa de risco.</div>
        <p class="spda-norms">Aplicar a série <a href="https://www.abntcatalogo.com.br/default.aspx?P=C0N63GK2P5N1" target="_blank" rel="noopener">ABNT NBR 5419:2026</a>: Parte 2 para gerenciamento de risco, Parte 3 para danos físicos e perigos à vida e Parte 4 para sistemas elétricos e eletrônicos internos. Referências internacionais: <a href="https://webstore.iec.ch/en/publication/28137" target="_blank" rel="noopener">IEC 62305-2:2024</a> e <a href="https://webstore.iec.ch/en/publication/33680" target="_blank" rel="noopener">IEC 62305-3:2024</a>. Materiais, seções, conexões, eletrodos, distância de separação e proteção das placas solares exigem projeto de profissional habilitado.</p>
      </div>
    </details>
    <div class="sim-canvas">
      <svg viewBox="0 0 1600 760" role="img" aria-labelledby="simTitle simDesc">
        <title id="simTitle">Simulador do quadro geral trifásico</title>
        <desc id="simDesc">Condutores L1, L2, L3, neutro e proteção até os barramentos, lado solar positivo e negativo e disjuntores acionáveis.</desc>
        <defs><filter id="simShadow" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#15382e" flood-opacity=".10"/></filter></defs>

        <g data-wire="grid-source">
          <path class="sim-wire l1 is-live" d="M175 75H215M325 75H370"/><path class="sim-wire l2 is-live" d="M175 100H215M325 100H370"/><path class="sim-wire l3 is-live" d="M175 125H215M325 125H370"/><path class="sim-wire neutral is-live" d="M175 150H215M325 150H370"/>
        </g>
        <g data-wire="grid-output">
          <path class="sim-wire l1" d="M495 75H535V240H570"/><path class="sim-wire l2" d="M495 100H547V265H570"/><path class="sim-wire l3" d="M495 125H559V290H570"/><path class="sim-wire neutral" d="M495 150H571V315"/>
        </g>
        <line class="sim-bus l1" data-bus="phase" x1="80" y1="240" x2="1515" y2="240"/><line class="sim-bus l2" data-bus="phase" x1="80" y1="265" x2="1515" y2="265"/><line class="sim-bus l3" data-bus="phase" x1="80" y1="290" x2="1515" y2="290"/><line class="sim-bus neutral" data-bus="neutral" x1="80" y1="315" x2="1515" y2="315"/><line class="sim-bus pe" x1="80" y1="340" x2="1515" y2="340"/>
        <g><rect class="sim-chip" x="25" y="229" width="38" height="22" rx="6"/><text class="sim-chip-text" x="44" y="244">L1</text><rect class="sim-chip" x="25" y="254" width="38" height="22" rx="6"/><text class="sim-chip-text" x="44" y="269">L2</text><rect class="sim-chip" x="25" y="279" width="38" height="22" rx="6"/><text class="sim-chip-text" x="44" y="294">L3</text><rect class="sim-chip" x="25" y="304" width="38" height="22" rx="6"/><text class="sim-chip-text" x="44" y="319">N</text><rect class="sim-chip" x="25" y="329" width="38" height="22" rx="6"/><text class="sim-chip-text" x="44" y="344">PE</text></g>

        <g class="sim-static"><rect class="device-body" x="25" y="35" width="150" height="150" rx="12"/><rect class="device-head" x="25" y="35" width="150" height="28" rx="12"/><text class="dev-title" x="100" y="54">CONCESSIONÁRIA</text><text class="dev-sub" x="100" y="87">entrada 3F + N</text><text class="dev-value" id="svgGrid" x="100" y="107">380 V · 3F+N</text><text class="dev-sub" x="100" y="134">alimentação presente</text><text class="dev-sub" x="100" y="158">⚠ permanece energizada</text></g>
        <g class="sim-static"><rect class="device-body" x="215" y="35" width="110" height="150" rx="12"/><rect class="device-head" x="215" y="35" width="110" height="28" rx="12"/><text class="dev-title" x="270" y="54">MEDIDOR</text><text class="dev-sub" x="270" y="91">bidirecional</text><text class="dev-value" x="270" y="115">↔ kWh</text><text class="dev-sub" x="270" y="145">rede ⇄ solar</text></g>
        ${breaker(370,35,125,150,'general','DJ GERAL','svgMainBreaker','200 A*')}
        <text class="sim-label strong" x="800" y="216">BARRAMENTOS DO QGBT — clique nos disjuntores para simular</text>

        <g data-wire="solar-bus"><path class="sim-wire l1" d="M455 240V455"/><path class="sim-wire l2" d="M466 265V455"/><path class="sim-wire l3" d="M477 290V455"/><path class="sim-wire neutral" d="M488 315V455"/></g>
        <g data-wire="solar-ac"><path class="sim-wire l1" d="M455 550V605H420"/><path class="sim-wire l2" d="M466 550V615H420"/><path class="sim-wire l3" d="M477 550V625H420"/><path class="sim-wire neutral" d="M488 550V635H420"/></g>
        <g data-wire="solar-dc"><path class="sim-wire positive" d="M135 645H165M270 645H300"/><path class="sim-wire negative" d="M135 675H165M270 675H300"/></g>
        <path class="sim-wire pe" d="M360 705V720H500V340"/>
        ${breaker(430,455,85,95,'solar','DJ SOLAR','svgInvBreaker','80 A*','solar')}
        <g class="sim-static solar"><rect class="device-body" x="20" y="600" width="115" height="105" rx="11"/><rect class="device-head" x="20" y="600" width="115" height="27" rx="11"/><text class="dev-title" x="77" y="619">ARRANJO FV</text><text class="dev-sub" id="svgModules" x="77" y="653">90 módulos</text><text class="dev-value" id="svgSolar" x="77" y="675">49,5 kWp</text><text class="dev-sub" x="77" y="693">CC sempre ativa ao sol</text></g>
        <g class="sim-static solar"><rect class="device-body" x="165" y="600" width="105" height="105" rx="11"/><rect class="device-head" x="165" y="600" width="105" height="27" rx="11"/><text class="dev-title" x="217" y="619">STRING BOX</text><text class="dev-sub" x="217" y="651">fusíveis + DPS CC</text><text class="dev-value" id="svgFuse" x="217" y="676">20 A gPV*</text></g>
        <g class="sim-static solar"><rect class="device-body" x="300" y="590" width="120" height="115" rx="11"/><rect class="device-head" x="300" y="590" width="120" height="27" rx="11"/><text class="dev-title" x="360" y="609">INVERSOR</text><text class="dev-sub" x="360" y="641">CC → CA 3F+N</text><text class="dev-value" id="svgInvPower" x="360" y="666">50 kW</text><text class="dev-sub" data-inverter-status x="360" y="687">injetando</text></g>
        <text class="sim-label strong" x="74" y="588">GERAÇÃO SOLAR</text><text class="sim-label" x="140" y="638">+ CC</text><text class="sim-label" x="140" y="691">− CC</text>

        <g data-wire="cap-pre"><path class="sim-wire l1" d="M635 240V435"/><path class="sim-wire l2" d="M648 265V435"/><path class="sim-wire l3" d="M661 290V435"/></g><g data-wire="cap-post"><path class="sim-wire l1" d="M635 530V605"/><path class="sim-wire l2" d="M648 530V605"/><path class="sim-wire l3" d="M661 530V605"/></g><path class="sim-wire pe" d="M680 340V605"/>
        ${breaker(610,435,80,95,'capacitor','DJ CAP.','svgCapBreaker','40 A*','cap')}
        <g class="sim-static cap"><rect class="device-body" x="600" y="605" width="100" height="100" rx="11"/><rect class="device-head" x="600" y="605" width="100" height="27" rx="11"/><text class="dev-title" x="650" y="624">BANCO CAP.</text><text class="dev-sub" x="650" y="655">comando CAFP</text><text class="dev-value" id="svgCap" x="650" y="680">20 kVAr*</text></g>

        <g data-wire="load1-pre"><path class="sim-wire l1" d="M820 240V435"/><path class="sim-wire neutral" d="M836 315V435"/></g><g data-wire="load1-post"><path class="sim-wire l1" d="M820 530V610"/><path class="sim-wire neutral" d="M836 530V610"/></g><path class="sim-wire pe" d="M852 340V610"/>
        ${breaker(792,435,78,95,'load1','DJ C01',null,'16 A')}
        <g data-load="load1"><circle class="sim-load-icon" cx="831" cy="655" r="35"/><circle class="sim-load-glow" cx="831" cy="655" r="17"/><text class="sim-label strong" x="797" y="708">ILUMINAÇÃO</text></g>

        <g data-wire="load2-pre"><path class="sim-wire l2" d="M990 265V435"/><path class="sim-wire neutral" d="M1006 315V435"/></g><g data-wire="load2-post"><path class="sim-wire l2" d="M990 530V610"/><path class="sim-wire neutral" d="M1006 530V610"/></g><path class="sim-wire pe" d="M1022 340V610"/>
        ${breaker(962,435,78,95,'load2','DJ C02',null,'20 A')}
        <g data-load="load2"><rect class="sim-load-icon" x="963" y="620" width="70" height="70" rx="14"/><circle class="sim-load-glow" cx="980" cy="655" r="6"/><circle class="socket-earth" cx="998" cy="655" r="6"/><circle class="sim-load-glow" cx="1016" cy="655" r="6"/><text class="socket-earth-mark" x="998" y="678">⏚</text><text class="sim-label strong" x="963" y="708">TOMADA 2P+T</text></g>

        <g data-wire="motor-pre"><path class="sim-wire l1" d="M1150 240V435"/><path class="sim-wire l2" d="M1163 265V435"/><path class="sim-wire l3" d="M1176 290V435"/></g><g data-wire="motor-post"><path class="sim-wire l1" d="M1150 530V610"/><path class="sim-wire l2" d="M1163 530V610"/><path class="sim-wire l3" d="M1176 530V610"/></g><path class="sim-wire pe" d="M1189 340V610"/>
        ${breaker(1125,435,78,95,'motor','DJ MOTOR',null,'25 A')}
        <g data-load="motor"><circle class="sim-load-icon" cx="1164" cy="655" r="36"/><circle class="sim-load-glow" cx="1164" cy="655" r="22"/><text class="dev-title" x="1164" y="660">M</text><text class="sim-label strong" x="1145" y="708">MOTOR 3F</text></g>

        <g data-wire="ac-pre"><path class="sim-wire l3" d="M1320 290V435"/><path class="sim-wire neutral" d="M1336 315V435"/></g><g data-wire="ac-post"><path class="sim-wire l3" d="M1320 530V610"/><path class="sim-wire neutral" d="M1336 530V610"/></g><path class="sim-wire pe" d="M1352 340V610"/>
        ${breaker(1292,435,78,95,'ac','DJ AR-COND.',null,'20 A')}
        <g data-load="ac"><circle class="sim-load-icon" cx="1331" cy="655" r="36"/><circle class="sim-load-glow" cx="1331" cy="655" r="22"/><text class="dev-title" x="1331" y="661">❄</text><text class="sim-label strong" x="1296" y="708">AR-CONDIC.</text></g>

        <g data-wire="shower-pre"><path class="sim-wire l1" d="M1480 240V435"/><path class="sim-wire neutral" d="M1496 315V435"/></g><g data-wire="shower-post"><path class="sim-wire l1" d="M1480 530V610"/><path class="sim-wire neutral" d="M1496 530V610"/></g><path class="sim-wire pe" d="M1512 340V610"/>
        ${breaker(1452,435,78,95,'shower','DJ CHUVEIRO',null,'40 A')}
        <g data-load="shower"><rect class="sim-load-icon" x="1453" y="620" width="70" height="70" rx="14"/><circle class="sim-load-glow" cx="1488" cy="655" r="22"/><text class="dev-title" x="1488" y="660">≈</text><text class="sim-label strong" x="1455" y="708">CHUVEIRO</text></g>

        <g data-help-static="earth"><path class="sim-wire pe" d="M1515 340H1560V375"/><path d="M1538 375h44M1546 384h28M1554 393h12" stroke="#568e43" stroke-width="3"/><text class="sim-label strong" x="1525" y="414">BEP / TERRA</text></g>
      </svg>
    </div>
    <div class="sim-inspector">
      <div class="sim-state-card"><span>Entrada da rede</span><strong id="stateGrid">Presente · antes do DJ</strong></div>
      <div class="sim-state-card"><span>Barramentos L1/L2/L3/N</span><strong id="stateBus">Energizados</strong></div>
      <div class="sim-state-card"><span>Geração solar</span><strong id="stateSolar" class="solar-live">Injetando no QGBT</strong></div>
      <div class="sim-state-card"><span>Circuitos de carga</span><strong id="stateLoads">5 de 5 ligados</strong></div>
    </div>
    <div class="diagram-caption"><span class="sim-hint">Clique em qualquer disjuntor para ligar ou desligar.</span><span>Simulação lógica didática; não substitui estudos de proteção.</span></div>`;

  const documentsSection = document.getElementById('documentos');
  if (documentsSection && !document.getElementById('cabos')) documentsSection.insertAdjacentHTML('beforebegin', `
    <section class="section" id="cabos">
      <div class="section-head"><div class="section-title"><span class="section-index">04 / CONDUTORES</span><h2>Dimensionamento preliminar dos cabos</h2><p>Seção de cobre por capacidade corrigida, mínimos normativos e queda de tensão do trecho.</p></div></div>
      <div class="panel cable-panel">
        <div class="cable-controls">
          <label>Método de referência<select id="cableMethod"><option value="B1">B1 · fios em eletroduto</option><option value="B2">B2 · cabo multipolar em eletroduto</option><option value="C">C · cabo fixado / bandeja</option></select></label>
          <label>Temperatura ambiente<select id="cableTemp"><option value="25">25 °C</option><option value="30" selected>30 °C</option><option value="35">35 °C</option><option value="40">40 °C</option><option value="45">45 °C</option><option value="50">50 °C</option></select></label>
          <label>Circuitos agrupados<select id="cableGrouping"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></label>
          <label>Limite de queda no trecho<div class="field"><input id="cableDropLimit" type="number" min="0.5" max="8" step="0.1" value="2"><span class="unit">%</span></div></label>
        </div>
        <div class="cable-summary"><div><span>Material / isolação</span><strong>Cobre · PVC 70 °C</strong></div><div><span>Fator temperatura</span><strong id="cableTempFactor">1,00</strong></div><div><span>Fator agrupamento</span><strong id="cableGroupFactor">1,00</strong></div><div><span>Coordenação exigida</span><strong>Iz corrigida ≥ In ≥ Ib</strong></div></div>
        <div class="cable-table-wrap"><table class="cable-table"><thead><tr><th>Circuito</th><th>Carga</th><th>Ib</th><th>DJ In</th><th>Comprimento</th><th>Fase / neutro</th><th>PE</th><th>Iz corrigida</th><th>Queda</th><th>Critério</th></tr></thead><tbody id="cableSizingBody"></tbody></table></div>
        <div class="cable-note"><strong>Escopo:</strong> cálculo orientativo para cabos de cobre PVC 70 °C, métodos B1/B2/C e uma camada. A seção definitiva ainda exige verificação de curto-circuito, proteção contra choques, harmônicas, seletividade, terminais, instalação real e queda acumulada desde a origem.</div>
      </div>
    </section>`);
  document.querySelector('#documentos .section-index')?.replaceChildren(document.createTextNode('05 / ENTREGA TÉCNICA'));
  const nav = document.querySelector('nav');
  if (nav && !nav.querySelector('a[href="#cabos"]')) nav.querySelector('a[href="#documentos"]')?.insertAdjacentHTML('beforebegin','<a href="#cabos">Cabos</a>');
  try {
    if (typeof circuits !== 'undefined') {
      const acCircuit = circuits.find(c => c.name === 'C03' || /climat|ar.?cond/i.test(c.desc));
      if (acCircuit && acCircuit.desc === 'Climatização') acCircuit.desc = 'Ar-condicionado';
      if (!circuits.some(c => /chuveiro/i.test(c.desc))) circuits.push({name:'C06',desc:'Chuveiro elétrico',phase:'L3',power:7500,voltage:220,pf:1,breaker:40});
      if (typeof renderCircuits === 'function') renderCircuits();
    }
  } catch (error) { console.warn('Não foi possível complementar o quadro de cargas.', error); }

  const resultsGrid = document.querySelector('.results-grid');
  if (resultsGrid && !document.getElementById('capEstimateCard')) resultsGrid.insertAdjacentHTML('beforeend', `
    <article class="result-card cap-estimate" id="capEstimateCard">
      <span class="tag">Composição estimada do banco</span>
      <strong id="capUnitCount">4 módulos</strong>
      <p id="capUnitText">Automático: 4 × 5 kVAr · fixo: 1 × 20 kVAr</p>
      <div class="cap-steps" id="capSteps"></div>
    </article>`);
  const tooltip = document.createElement('div');
  tooltip.className = 'sim-tooltip';
  tooltip.setAttribute('role', 'tooltip');
  document.body.appendChild(tooltip);
  const conductorInfo = {
    l1: { name:'Fase L1', color:'Vermelho', hex:'#c9443e' },
    l2: { name:'Fase L2', color:'Preto', hex:'#263038' },
    l3: { name:'Fase L3', color:'Azul', hex:'#2e6591' },
    neutral: { name:'Neutro (N)', color:'Azul-claro', hex:'#46a2d0' },
    pe: { name:'Terra de proteção (PE)', color:'Verde', hex:'#568e43' },
    positive: { name:'Positivo CC (+)', color:'Vermelho', hex:'#e04d3f' },
    negative: { name:'Negativo CC (−)', color:'Grafite', hex:'#3a4248' }
  };
  const moveTooltip = event => {
    const margin = 12;
    const box = tooltip.getBoundingClientRect();
    const x = Math.min(event.clientX + 15, window.innerWidth - box.width - margin);
    const y = Math.min(event.clientY + 15, window.innerHeight - box.height - margin);
    tooltip.style.left = `${Math.max(margin,x)}px`;
    tooltip.style.top = `${Math.max(margin,y)}px`;
  };
  document.querySelectorAll('.sim-wire,.sim-bus').forEach(line => {
    const key = Object.keys(conductorInfo).find(name => line.classList.contains(name));
    if (!key) return;
    line.dataset.conductor = key;
    line.addEventListener('mouseenter', event => {
      const info = conductorInfo[key];
      const status = line.classList.contains('phase-unavailable') ? 'Não disponível no fornecimento selecionado' : key === 'pe' ? 'Condutor de proteção — não deve conduzir corrente em operação normal' : (line.classList.contains('is-dead') ? 'Desenergizado nesta simulação' : 'Energizado nesta simulação');
      tooltip.innerHTML = `<b><i class="sim-tooltip-dot" style="background:${info.hex}"></i>${info.name}</b><small>Cor: ${info.color} · ${status}</small>`;
      tooltip.classList.add('show');
      moveTooltip(event);
    });
    line.addEventListener('mousemove', moveTooltip);
    line.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
  });

  const breakerHelp={
    general:{title:'Disjuntor geral do QGBT',text:'Proteção e seccionamento principal. Ao desligar, desenergiza os barramentos internos, mas a entrada da concessionária continua energizada.'},
    solar:{title:'Disjuntor CA do inversor',text:'Conecta ou isola a saída CA do inversor fotovoltaico. Não elimina a tensão do lado CC dos módulos quando há luz.'},
    capacitor:{title:'Disjuntor do banco de capacitores',text:'Protege e secciona o banco que compensa potência reativa. A manobra deve considerar corrente de energização e descarga residual.'},
    load1:{title:'Disjuntor C01 — iluminação',text:'Protege o circuito de iluminação ligado à fase L1 e ao neutro. Clique para simular abertura ou fechamento.'},
    load2:{title:'Disjuntor C02 — tomadas',text:'Protege o circuito de tomadas 2P+T ligado à fase L2, neutro e condutor de proteção PE.'},
    motor:{title:'Disjuntor do motor trifásico',text:'Protege o alimentador do motor nas três fases. A proteção definitiva deve considerar partida, sobrecarga e curto-circuito.'},
    ac:{title:'Disjuntor do ar-condicionado',text:'Protege o circuito dedicado do equipamento de climatização. Corrente e curva devem seguir placa e fabricante.'},
    shower:{title:'Disjuntor do chuveiro',text:'Protege o circuito dedicado de alta potência. Exige condutores, DR e aterramento compatíveis com a instalação.'}
  };
  const staticHelp={
    'CONCESSIONÁRIA':{title:'Entrada da concessionária',text:'Origem da alimentação conforme o fornecimento selecionado. Permanece energizada a montante mesmo quando o disjuntor geral está aberto.',status:()=> 'Tensão presente antes do DJ geral'},
    'MEDIDOR':{title:'Medidor bidirecional',text:'Registra energia importada da rede e energia excedente exportada pela geração. A medição real pertence à distribuidora.',status:()=>document.getElementById('wmDirection')?.textContent||'Fluxo calculado'},
    'ARRANJO FV':{title:'Arranjo fotovoltaico',text:'Conjunto de módulos em séries e paralelos que fornece corrente contínua. Os cabos + e − podem permanecer energizados sob irradiância.',status:()=>state.sun?'Com irradiância simulada':'Sem geração simulada'},
    'STRING BOX':{title:'String box CC',text:'Agrupa proteções do lado solar: fusíveis gPV, DPS CC e seccionamento, conforme configuração e requisitos do fabricante.'},
    'INVERSOR':{title:'Inversor fotovoltaico',text:'Converte corrente contínua dos módulos em corrente alternada sincronizada. O anti-ilhamento bloqueia a injeção quando a rede cai.',status:()=>document.querySelector('[data-inverter-status]')?.textContent||''},
    'BANCO CAP.':{title:'Banco de capacitores',text:'Fornece potência reativa capacitiva para elevar o fator de potência. Deve ter controlador, contatores próprios e proteção dimensionada.'}
  };
  const loadHelp={
    load1:{title:'Carga de iluminação',text:'Representa luminárias do circuito C01. O brilho indica que o circuito está energizado.'},
    load2:{title:'Tomada 2P+T',text:'Os dois pontos laterais representam fase e neutro; o ponto central verde representa o contato de terra PE.'},
    motor:{title:'Motor trifásico',text:'Carga indutiva alimentada por L1, L2 e L3. Consome potência ativa e reativa e pode ter corrente elevada na partida.'},
    ac:{title:'Ar-condicionado',text:'Carga dedicada de climatização. A potência real, corrente de partida e proteção dependem da placa do equipamento.'},
    shower:{title:'Chuveiro elétrico',text:'Carga resistiva de potência elevada. O circuito deve ser dedicado, corretamente aterrado e protegido por DR quando exigido.'}
  };
  const spdaFieldHelp={
    'Resultado da análise de risco':'A Parte 2 da ABNT NBR 5419 determina se medidas de proteção são necessárias. Dimensões isoladas não substituem essa análise.',
    'Nível de proteção adotado':'Classes I a IV definem severidade geométrica. O nível deve resultar da análise de risco e dos requisitos da ocupação.',
    'Comprimento da edificação (m)':'Dimensão usada para estimar perímetro, malha de captação e quantidade geométrica de descidas.',
    'Largura da edificação (m)':'Dimensão transversal usada na malha de captação e no anel de aterramento.',
    'Altura da edificação (m)':'Usada apenas na estimativa do comprimento das descidas; não determina sozinha a necessidade do SPDA.'
  };
  const spdaResultHelp={
    'Situação do estudo':'Informa se a análise de risco ainda está pendente, requer SPDA ou documentou sua dispensa.',
    'Raio da esfera rolante':'Raio usado no método da esfera rolante para posicionar captores de acordo com o nível de proteção.',
    'Malha máxima de captação':'Dimensão máxima da quadrícula de captação correspondente à classe selecionada.',
    'Espaçamento típico entre descidas':'Distância de referência para distribuir condutores de descida ao redor do perímetro.',
    'Quantidade geométrica de descidas':'Perímetro dividido pelo espaçamento, arredondado para cima e nunca inferior a duas.',
    'Perímetro / anel de aterramento':'Comprimento geométrico do contorno da edificação; o projeto real considera rota, eletrodos e interferências.',
    'Condutor estimado na cobertura':'Estimativa da malha retangular, incluindo linhas periféricas. Não inclui folgas, conexões e captores adicionais.',
    'Captação + descidas':'Soma orientativa da malha de cobertura com o comprimento vertical das descidas.'
  };
  const solarFieldHelp={
    'Potência-alvo FV (kWp)':'Potência de pico desejada. O programa calcula o menor arranjo inteiro que atende ou supera esse valor.',
    'Potência do módulo (Wp)':'Potência nominal STC de uma placa fotovoltaica conforme a ficha técnica.',
    'Voc do módulo (V)':'Tensão de circuito aberto de uma placa. É corrigida para o frio antes de comparar com a tensão máxima do inversor.',
    'Vmp do módulo (V)':'Tensão da placa no ponto de máxima potência. É corrigida para temperatura elevada na verificação do MPPT mínimo.',
    'Isc do módulo (A)':'Corrente de curto-circuito da placa. Serve de base para cabos e proteções CC.',
    'Vcc máxima do inversor (V)':'Limite absoluto que a Voc da string, corrigida para a menor temperatura, nunca pode ultrapassar.',
    'MPPT mínimo do inversor (V)':'Limite inferior de rastreamento. A Vmp quente da string precisa permanecer acima desse valor.'
  };
  const solarResultHelp={
    'Configuração':'Quantidade de placas em série por string e quantidade de strings em paralelo.',
    'Total de módulos':'Produto de módulos por string pela quantidade de strings.',
    'Potência instalada':'Potência STC total após o arredondamento para módulos inteiros.',
    'Vmp da string':'Soma das tensões Vmp dos módulos conectados em série.',
    'Voc corrigida a frio':'Soma de Voc multiplicada pelo fator de frio; deve ficar abaixo da Vcc máxima.',
    'Corrente de projeto do arranjo':'Estimativa de 1,25 × Isc × número de strings paralelas.',
    'Proteções CC estimadas':'Valores comerciais imediatamente superiores às correntes calculadas; validar com fusível máximo do módulo e entradas do inversor.',
    'Janela de módulos/string':'Intervalo permitido pelos limites de Voc a frio e Vmp em temperatura elevada.'
  };
  const fieldHelp={
    'Tecnologia':'Define a química e aplica valores iniciais típicos de tensão, DoD e eficiência. Sempre prevalecem os dados do fabricante.',
    'Tensão do módulo (V)':'Tensão nominal de uma unidade. A quantidade em série é arredondada para alcançar ou superar a tensão-alvo.',
    'Capacidade do módulo (Ah)':'Carga elétrica nominal de cada módulo. Ramais em paralelo somam Ah e capacidade de corrente.',
    'Tensão-alvo do banco (Vcc)':'Faixa CC requerida pelo inversor híbrido ou PCS. Deve respeitar tensão mínima, máxima e faixa operacional.',
    'Carga crítica (kW)':'Potência que o banco deve sustentar durante falta da rede. Use somente as cargas realmente prioritárias.',
    'Autonomia desejada (h)':'Tempo de alimentação pretendido. A energia básica é carga crítica multiplicada pela autonomia.',
    'Profundidade de descarga — DoD (%)':'Parcela da energia nominal permitida para uso. Limitar a descarga ajuda a preservar vida útil.',
    'Eficiência CC/CA total (%)':'Inclui perdas aproximadas em bateria, cabos e conversão. Reduz a energia disponível para as cargas.',
    'Margem de projeto (%)':'Reserva aplicada à energia requerida para envelhecimento, variações de carga e incertezas do estudo.'
  };
  const resultHelp={
    'Configuração':'S indica módulos em série; P indica ramais em paralelo.',
    'Total de módulos':'Produto entre quantidade em série e quantidade de ramais paralelos.',
    'Banco nominal':'Tensão do ramal em série e soma dos ampères-hora dos ramais paralelos.',
    'Energia instalada':'Energia nominal antes de limitar DoD e descontar perdas.',
    'Energia útil CA':'Energia estimada entregue após DoD e eficiência total.',
    'Autonomia calculada':'Energia útil dividida pela carga crítica informada.',
    'Corrente do banco':'Corrente CC aproximada na potência crítica, considerando a eficiência.',
    'BMS / proteção':'Estimativa com 125% da corrente; deve ser compatibilizada com curto-circuito, cabos e fabricante.'
  };
  const controlHelp={
    toggleSun:{title:'Irradiância solar',text:'Liga ou retira a geração fotovoltaica da simulação. Mesmo com o DJ CA aberto, o lado CC pode ter tensão sob luz.'},
    toggleFlow:{title:'Animação do fluxo',text:'Pausa somente o movimento visual das linhas; não altera os cálculos nem o estado elétrico simulado.'},
    allOff:{title:'Desligar todos os disjuntores',text:'Abre simultaneamente os dispositivos simulados. A origem da rede e o arranjo FV continuam sendo fontes potenciais.'},
    allOn:{title:'Religar todos os disjuntores',text:'Fecha todos os dispositivos simulados. Em instalação real, religamento requer inspeção e sequência segura.'},
    resetEnergy:{title:'Zerar energia acumulada',text:'Reinicia apenas o contador virtual de kWh; as leituras instantâneas continuam funcionando.'}
  };

  function attachHelp(elements,resolver) {
    elements.forEach(element=>{
      element.classList.add('has-explanation');
      element.addEventListener('mouseenter',event=>{
        const info=resolver(element);
        if(!info)return;
        const status=typeof info.status==='function'?info.status():info.status;
        tooltip.innerHTML=`<b>${info.title}</b><small>${info.text}</small>${status?`<small class="tip-status">Estado atual: ${status}</small>`:''}`;
        tooltip.classList.add('show');
        moveTooltip(event);
      });
      element.addEventListener('mousemove',moveTooltip);
      element.addEventListener('mouseleave',()=>tooltip.classList.remove('show'));
    });
  }

  attachHelp(document.querySelectorAll('[data-breaker]'),element=>{
    const info=breakerHelp[element.dataset.breaker];
    return info?{...info,status:()=>state[element.dataset.breaker]?'LIGADO — contatos fechados':'DESLIGADO — contatos abertos'}:null;
  });
  attachHelp(document.querySelectorAll('.sim-static'),element=>staticHelp[element.querySelector('.dev-title')?.textContent.trim()]);
  attachHelp(document.querySelectorAll('[data-load]'),element=>{
    element.classList.add('sim-load-help');
    const key=element.dataset.load,info=loadHelp[key];
    return info?{...info,status:()=>state.general&&state[key]?'ENERGIZADA':'DESENERGIZADA'}:null;
  });
  attachHelp(document.querySelectorAll('[data-help-static="earth"]'),()=>({title:'BEP e aterramento',text:'Barramento de equipotencialização principal ligado ao condutor PE. Conduz correntes de falha para permitir atuação das proteções; não é neutro.',status:'Condutor de proteção'}));
  attachHelp(document.querySelectorAll('.legend span'),element=>{const label=element.textContent.trim();const descriptions={'L1':'Fase L1 em vermelho.','L2':'Fase L2 em preto/grafite.','L3':'Fase L3 em azul-escuro.','Neutro':'Condutor neutro N em azul-claro.','PE/terra':'Condutor de proteção PE em verde.','+ CC':'Polo positivo do circuito em corrente contínua.','− CC':'Polo negativo do circuito em corrente contínua.'};return {title:label,text:descriptions[label]||'Identificação visual do condutor.'}});
  attachHelp(document.querySelectorAll('#systemMode'),element=>({title:'Tipo de fornecimento',text:'Escolha Trifásico (3F+N), Bifásico (2F+N) ou Monofásico (F+N). A opção reorganiza fases, fórmulas, medidor, diagrama e dimensionamento.',status:element.selectedOptions[0]?.text}));
  attachHelp(document.querySelectorAll('.wm-meter'),()=>({title:'Wattímetro CA virtual',text:'Calcula tensão, corrente, kW por fase ativa, kVAr, kVA, fator de potência e energia líquida conforme o fornecimento selecionado.',status:document.getElementById('wmDirection')?.textContent}));
  attachHelp(document.querySelectorAll('.wm-phase'),element=>({title:'Fase '+element.querySelector('b')?.textContent,text:'Mostra tensão fase-neutro, corrente eficaz calculada e potência ativa líquida desta fase. Valor de kW negativo indica exportação.'}));
  attachHelp(document.querySelectorAll('.wm-total'),element=>{const label=element.querySelector('span')?.textContent.trim();const descriptions={'Energia líquida':'Acumula importação como positiva e exportação como negativa ao longo do tempo.','Potência reativa':'Parcela reativa líquida das cargas menos a compensação do banco de capacitores.','Potência aparente':'Combinação vetorial de potência ativa e reativa, expressa em kVA.','Fator de potência':'Relação entre potência ativa absoluta e potência aparente. Quanto mais próximo de 1, menor a parcela reativa.'};return {title:label,text:descriptions[label]||'Total calculado pelo medidor virtual.'}});
  attachHelp(document.querySelectorAll('.wm-stat'),element=>{const label=element.querySelector('span')?.textContent.trim();const texts={'Potência das cargas':'Soma das potências ativas dos circuitos que estão ligados, multiplicada pela demanda simultânea.','Geração fotovoltaica':'Potência ativa simulada do inversor quando há sol, rede presente e DJ solar fechado.','Fluxo na concessionária':'Diferença entre cargas e geração: positivo importa da rede; excedente solar exporta.','Demanda simultânea':'Controle didático que varia todas as cargas entre 0% e 150% e atualiza corrente e potência imediatamente.'};return {title:label,text:texts[label]||'Indicador calculado em tempo real.'}});
  attachHelp(document.querySelectorAll('.spda-field'),element=>{const label=element.querySelector('span')?.textContent.trim();return {title:label,text:spdaFieldHelp[label]||'Parâmetro do pré-estudo geométrico do SPDA.'}});
  attachHelp(document.querySelectorAll('.spda-result'),element=>{const label=element.querySelector('span')?.textContent.trim();return {title:label,text:spdaResultHelp[label]||'Resultado geométrico preliminar.'}});
  attachHelp(document.querySelectorAll('.spda-scene'),()=>({title:'Caminho da corrente de descarga',text:'Captação no topo, múltiplas descidas, anel de aterramento e equipotencialização no BEP formam o SPDA externo representado.'}));
  attachHelp(document.querySelectorAll('.spda-check'),element=>({title:'Verificação do SPDA',text:element.textContent.trim()}));
  attachHelp(document.querySelectorAll('.solar-field'),element=>{const label=element.querySelector('span')?.textContent.trim();return {title:label,text:solarFieldHelp[label]||'Parâmetro elétrico do arranjo fotovoltaico.'}});
  attachHelp(document.querySelectorAll('.solar-result'),element=>{const label=element.querySelector('span')?.textContent.trim();return {title:label,text:solarResultHelp[label]||'Resultado recalculado do arranjo fotovoltaico.'}});
  attachHelp(document.querySelectorAll('.solar-diagram>strong'),()=>({title:'Strings fotovoltaicas',text:'Cada linha representa módulos em série. As linhas são strings ligadas em paralelo e somam corrente.'}));
  attachHelp(document.querySelectorAll('.solar-safety'),()=>({title:'Compatibilidade solar obrigatória',text:'A configuração final depende dos coeficientes térmicos do módulo, temperaturas locais, entradas e corrente máxima de cada MPPT.'}));
  attachHelp(document.querySelectorAll('[data-pv-flow]'),element=>{const help={strings:{title:'Strings fotovoltaicas',text:'Conjuntos de módulos ligados em série. As strings paralelas devem ter características e quantidade de módulos compatíveis.'},box:{title:'String box CC',text:'Reúne fusíveis quando aplicáveis, DPS, barramentos e seccionamento antes do inversor central.'},inverter:{title:'Inversor central',text:'Recebe as strings nos MPPTs e converte a energia CC em CA sincronizada com a rede.'},qgbt:{title:'Disjuntor solar e QGBT',text:'A saída CA passa pela proteção dedicada antes de conectar ao barramento principal.'}};return help[element.dataset.pvFlow]});
  attachHelp(document.querySelectorAll('.pv-arch-card'),element=>element.classList.contains('active')?{title:'Arquitetura com inversor string',text:'É a arquitetura dimensionada pelo programa: módulos em série, strings paralelas, string box e inversor central.'}:{title:'Arquitetura com microinversores',text:'É a arquitetura da referência enviada: conversão CC/CA próxima aos módulos e interligação por ramais CA. Exige cálculo específico por modelo.'});
  const pvStringsElement=document.getElementById('pvStrings');
  pvStringsElement?.addEventListener('mouseover',event=>{const module=event.target.closest('.pv-module');if(!module)return;tooltip.innerHTML=`<b>Placa ${module.dataset.pvModule} · String ${module.dataset.pvString}</b><small>Módulo ligado em série nesta string. Em série, as tensões se somam e a corrente permanece limitada pela corrente do módulo.</small>`;tooltip.classList.add('show');moveTooltip(event)});
  pvStringsElement?.addEventListener('mousemove',event=>{if(event.target.closest('.pv-module'))moveTooltip(event)});
  pvStringsElement?.addEventListener('mouseout',event=>{if(event.target.closest('.pv-module')&&!event.relatedTarget?.closest?.('.pv-module'))tooltip.classList.remove('show')});
  attachHelp(document.querySelectorAll('.battery-field'),element=>{const label=element.querySelector('span')?.textContent.trim();return {title:label,text:fieldHelp[label]||'Parâmetro do cálculo preliminar do banco de baterias.'}});
  attachHelp(document.querySelectorAll('.battery-result'),element=>{const label=element.querySelector('span')?.textContent.trim();return {title:label,text:resultHelp[label]||'Resultado recalculado automaticamente.'}});
  attachHelp(document.querySelectorAll('.battery-equation'),()=>({title:'Topologia série/paralelo',text:'Módulos em série elevam a tensão sem somar Ah. Ramais idênticos em paralelo mantêm a tensão e somam Ah, corrente e energia.'}));
  attachHelp(document.querySelectorAll('.battery-safety'),()=>({title:'Requisitos essenciais do BESS',text:'BMS, PCS/inversor híbrido, proteções CC, seccionamento, monitoramento térmico e compatibilidade do fabricante são indispensáveis.'}));
  const bessBlockHelp={
    bank:{title:'Banco de baterias CC',text:'Agrupa módulos em série para obter tensão e ramais em paralelo para obter Ah, corrente e energia.'},
    branch:{title:'Proteção individual dos ramais',text:'Cada ramal paralelo deve possuir supervisão por BMS e proteção CC compatível, evitando correntes de circulação e falhas não isoladas.'},
    main:{title:'Seccionamento e proteção geral CC',text:'Isola o banco completo e protege o alimentador principal. Tensão, poder de interrupção e corrente de curto-circuito devem ser verificados.'},
    pcs:{title:'PCS ou inversor híbrido',text:'Converte energia entre CC e CA, controla carga e descarga e deve ser compatível com a tensão do banco e a comunicação do BMS.'},
    load:{title:'Cargas críticas',text:'Conjunto atendido durante a autonomia. A potência e o perfil real de demanda determinam corrente e energia necessárias.'}
  };
  const spdaBlockHelp={
    capture:{title:'Subsistema de captação',text:'Intercepta a descarga conforme esfera rolante, malha ou ângulo de proteção definido no projeto.'},
    mesh:{title:'Malha de captação',text:'Condutores na cobertura limitam as dimensões das áreas protegidas conforme o nível de proteção adotado.'},
    downs:{title:'Condutores de descida',text:'Conduzem a corrente da cobertura ao aterramento por caminhos paralelos distribuídos no perímetro.'},
    bep:{title:'BEP e equipotencialização',text:'Interliga aterramento, PE, SPDA e partes metálicas para reduzir diferenças perigosas de potencial.'},
    earth:{title:'Subsistema de aterramento',text:'Distribui a corrente da descarga no solo e integra o anel, eletrodos e conexões especificados no projeto.'},
    spd:{title:'DPS coordenados',text:'Limitam surtos conduzidos nos lados CA, CC, dados e sinais. Complementam o SPDA externo, mas não o substituem.'}
  };
  function bindDynamicBlocks(panelId,dataKey,detailId,help){
    const panel=document.getElementById(panelId),detail=document.getElementById(detailId);if(!panel||!detail)return;
    const attr=`data-${dataKey.replace(/[A-Z]/g,letter=>'-'+letter.toLowerCase())}`;
    panel.addEventListener('click',event=>{const target=event.target.closest(`[${attr}]`);if(!target)return;const key=target.dataset[dataKey],info=help[key];if(!info)return;panel.querySelectorAll('.dynamic-block').forEach(block=>block.classList.toggle('active',block.dataset[dataKey]===key));detail.innerHTML=`<strong>${info.title}</strong><span>${info.text}</span>`;});
  }
  bindDynamicBlocks('bessBlockDiagram','bessBlock','bessBlockDetail',bessBlockHelp);
  bindDynamicBlocks('spdaBlockDiagram','spdaBlock','spdaBlockDetail',spdaBlockHelp);
  attachHelp(document.querySelectorAll('.dynamic-block[data-bess-block]'),element=>{const info=bessBlockHelp[element.dataset.bessBlock];return info?{...info,status:element.querySelector('strong')?.textContent}:null});
  attachHelp(document.querySelectorAll('.dynamic-block[data-spda-block]'),element=>{const info=spdaBlockHelp[element.dataset.spdaBlock];return info?{...info,status:element.querySelector('strong')?.textContent}:null});  attachHelp(document.querySelectorAll('.cable-controls label'),element=>({title:element.childNodes[0]?.textContent.trim()||'Parâmetro dos cabos',text:'Este parâmetro altera capacidade de corrente corrigida ou limite de queda de tensão da tabela.'}));
  attachHelp(document.querySelectorAll('.cable-summary div'),element=>({title:element.querySelector('span')?.textContent.trim(),text:'Resumo da hipótese aplicada ao dimensionamento preliminar dos condutores.'}));
  attachHelp(document.querySelectorAll('.cable-table th'),element=>{const descriptions={'Circuito':'Identificação do alimentador ou circuito final.','Carga':'Equipamento ou conjunto alimentado.','Ib':'Corrente de projeto calculada.','DJ In':'Corrente nominal do dispositivo de proteção.','Comprimento':'Distância usada para calcular queda de tensão.','Fase / neutro':'Quantidade e seção dos condutores carregados.','PE':'Seção estimada do condutor de proteção.','Iz corrigida':'Capacidade de condução após temperatura e agrupamento.','Queda':'Tensão perdida no trecho, em volts e percentual.','Critério':'Condição que determinou a seção final.'};return {title:element.textContent.trim(),text:descriptions[element.textContent.trim()]||'Coluna do dimensionamento.'}});
  attachHelp(document.querySelectorAll('.sim-state-card'),element=>({title:element.querySelector('span')?.textContent.trim(),text:'Resumo do estado atual da simulação; muda ao manobrar os disjuntores ou a geração.'}));
  Object.entries(controlHelp).forEach(([id,info])=>{const element=document.getElementById(id);if(element)attachHelp([element],()=>info)});
  attachHelp(document.querySelectorAll('#spdaPanel>summary'),()=>({title:'Pré-estudo expansível do SPDA',text:'Clique para visualizar nível de proteção, captação, descidas, aterramento, equipotencialização e ressalvas da análise de risco.'}));
  attachHelp(document.querySelectorAll('#solarArray>summary'),()=>({title:'Arranjo de placas solares expansível',text:'Clique para ver e ajustar séries, strings paralelas, tensões, correntes e proteções estimadas.'}));
  attachHelp(document.querySelectorAll('#batteryBank>summary'),()=>({title:'Banco de baterias expansível',text:'Clique para abrir ou recolher o dimensionador. O resumo mostra módulos, energia instalada e tensão nominal.'}));
  document.addEventListener('click',()=>tooltip.classList.remove('show'));

  const saved = JSON.parse(localStorage.getItem('qgbtSimulatorState') || 'null');
  const state = Object.assign({ general:true, solar:true, capacitor:true, load1:true, load2:true, motor:true, ac:true, shower:true, sun:true, animate:true, loadFactor:1 }, saved || {});
  const keys = ['general','solar','capacitor','load1','load2','motor','ac','shower'];

  function setWire(group, live) {
    document.querySelectorAll(`[data-wire="${group}"] .sim-wire`).forEach(el => {
      el.classList.toggle('is-live', live && state.animate);
      el.classList.toggle('is-dead', !live);
      el.style.animationPlayState = state.animate ? 'running' : 'paused';
    });
  }

  const meterState = { energy: Number(localStorage.getItem('qgbtMeterEnergy')) || 0, lastTime: performance.now() };
  const formatMeter = (value, digits=1) => Number(value || 0).toLocaleString('pt-BR',{minimumFractionDigits:digits,maximumFractionDigits:digits});
  const inputNumber = id => Math.max(0, parseFloat(document.getElementById(id)?.value) || 0);
  function systemConfig(){
    const mode=document.getElementById('systemMode')?.value||'tri',voltage=Math.max(1,inputNumber('voltage'));
    const phases=mode==='tri'?['L1','L2','L3']:mode==='bi'?['L1','L2']:['L1'];
    return {mode,voltage,phases,label:mode==='tri'?'Trifásico · 3F+N':mode==='bi'?'Bifásico · 2F+N':'Monofásico · F+N',phaseVoltage:mode==='mono'?voltage:voltage/Math.sqrt(3),phaseCode:mode==='tri'?'T':mode==='bi'?'B':'M'};
  }
  function feederCurrent(powerKw,pf=1){const c=systemConfig(),p=powerKw*1000;return c.mode==='tri'?p/(Math.sqrt(3)*c.voltage*pf):c.mode==='bi'?p/(2*c.phaseVoltage*pf):p/(c.voltage*pf)}
  function acSourceCurrent(powerKw,pf=1){const c=systemConfig(),p=powerKw*1000;return c.mode==='tri'?p/(Math.sqrt(3)*c.voltage*pf):p/(c.voltage*pf)}

  function capacitorDesign() {
    const P=inputNumber('loadPower'), V=Math.max(1,inputNumber('voltage'));
    const pfi=Math.min(.9999,Math.max(.01,inputNumber('pfInitial'))), pft=Math.min(.9999,Math.max(.01,inputNumber('pfTarget')));
    const qc=Math.max(0,P*(Math.tan(Math.acos(pfi))-Math.tan(Math.acos(pft))));
    const ratings=[2.5,5,7.5,10,12.5,15,20,25,30,40,50,60,75,100,125,150,200];
    const adopted=qc<=0?0:(ratings.find(x=>x>=qc)||Math.ceil(qc/25)*25);
    const current=systemConfig().mode==='tri'?adopted*1000/(Math.sqrt(3)*V):adopted*1000/V;
    return {qc,adopted,current,designCurrent:1.5*current};
  }

  function capacitorSteps(kvar) {
    if (!kvar) return [];
    const preferred=kvar<=15?[3,2,1]:kvar<=60?[4,5,6,3,2,1]:[6,5,4,3,2,1];
    const count=preferred.find(n=>Math.abs((kvar/n)/2.5-Math.round((kvar/n)/2.5))<1e-6)||1;
    return Array(count).fill(kvar/count);
  }

  function updateCapComposition() {
    const design=capacitorDesign(), steps=capacitorSteps(design.adopted);
    const count=document.getElementById('capUnitCount'), text=document.getElementById('capUnitText'), container=document.getElementById('capSteps');
    if (!count || !text || !container) return;
    count.textContent=steps.length?`${steps.length} módulos · ${systemConfig().label}`:'Banco não necessário';
    text.textContent=steps.length?`Automático: ${steps.length} × ${formatMeter(steps[0],steps[0]%1?1:0)} kVAr · fixo: 1 × ${formatMeter(design.adopted,design.adopted%1?1:0)} kVAr`:'O FP desejado não exige compensação.';
    container.innerHTML=steps.map((step,index)=>`<span class="cap-step">E${index+1} · ${formatMeter(step,step%1?1:0)} kVAr</span>`).join('');
  }

  function circuitEnabled(circuit) {
    if (!state.general) return false;
    const description=String(circuit.desc||'').toLowerCase();
    if (/chuveiro/.test(description)) return state.shower;
    if (/ar.?cond|climat/.test(description)) return state.ac;
    if (/motor|bomba/.test(description)) return state.motor;
    if (/ilum/.test(description)) return state.load1;
    if (/tomada/.test(description)) return state.load2;
    return true;
  }

  function meterValues() {
    const config=systemConfig(),active=config.phases,phases={L1:{p:0,q:0},L2:{p:0,q:0},L3:{p:0,q:0}};
    const sourceCircuits=typeof circuits!=='undefined'?circuits:[];
    let loadPower=0;
    sourceCircuits.filter(circuitEnabled).forEach(circuit=>{
      const p=Math.max(0,Number(circuit.power)||0)/1000*Math.max(0,Math.min(1.5,Number(state.loadFactor)||0));
      const pf=Math.min(1,Math.max(.01,Number(circuit.pf)||1)),q=p*Math.tan(Math.acos(pf));
      loadPower+=p;
      if(circuit.phase==='T') active.forEach(key=>{phases[key].p+=p/active.length;phases[key].q+=q/active.length});
      else if(circuit.phase==='B') active.slice(0,2).forEach(key=>{phases[key].p+=p/Math.min(2,active.length);phases[key].q+=q/Math.min(2,active.length)});
      else {const key=active.includes(circuit.phase)?circuit.phase:active[active.length-1];phases[key].p+=p;phases[key].q+=q;}
    });
    const inverterActive=state.general&&state.solar&&state.sun,solarPower=inverterActive?inputNumber('solarPower'):0;
    active.forEach(key=>phases[key].p-=solarPower/active.length);
    const cap=capacitorDesign();
    if(state.general&&state.capacitor&&cap.adopted) active.forEach(key=>phases[key].q-=cap.adopted/active.length);
    Object.entries(phases).forEach(([key,phase])=>{phase.s=Math.hypot(phase.p,phase.q);phase.i=state.general&&active.includes(key)?phase.s*1000/config.phaseVoltage:0});
    const activeValues=active.map(key=>phases[key]),pTotal=activeValues.reduce((sum,phase)=>sum+phase.p,0),qTotal=activeValues.reduce((sum,phase)=>sum+phase.q,0),sTotal=activeValues.reduce((sum,phase)=>sum+phase.s,0);
    return {phases,activePhases:active,lineVoltage:config.voltage,phaseVoltage:config.phaseVoltage,pTotal,qTotal,sTotal,pf:sTotal?Math.min(1,Math.abs(pTotal)/sTotal):1,loadPower,solarPower};
  }
  function updateMeter(accumulate=true) {
    const values=meterValues(), now=performance.now(), elapsed=Math.min(5000,Math.max(0,now-meterState.lastTime)),config=systemConfig();
    document.getElementById('wmModeTitle').textContent=`WATTÍMETRO ${config.label.toUpperCase()} · SIMULAÇÃO`;
    document.getElementById('wmSolarMode').textContent=`Injeção ${config.label.split(' ·')[0].toLowerCase()} simulada`;
    document.getElementById('simTitle').textContent=`Simulador do quadro geral ${config.label.split(' ·')[0].toLowerCase()}`;
    if(accumulate&&state.general) meterState.energy+=values.pTotal*elapsed/3600000;
    meterState.lastTime=now;
    localStorage.setItem('qgbtMeterEnergy',String(meterState.energy));
    ['A','B','C'].forEach((letter,index)=>{
      const key=['L1','L2','L3'][index],phase=values.phases[key],active=values.activePhases.includes(key),row=document.getElementById(`wmV${letter}`)?.closest('.wm-phase');
      if(row)row.classList.toggle('is-inactive',!active);
      document.getElementById(`wmV${letter}`).textContent=active?formatMeter(values.phaseVoltage,1):'—';
      document.getElementById(`wmI${letter}`).textContent=active?formatMeter(phase.i,1):'—';
      document.getElementById(`wmP${letter}`).textContent=active?formatMeter(phase.p,2):'—';
    });
    document.getElementById('wmEnergy').textContent=`${formatMeter(meterState.energy,3)} kWh`;
    document.getElementById('wmQ').textContent=`${formatMeter(values.qTotal,2)} kVAr`;
    document.getElementById('wmS').textContent=`${formatMeter(values.sTotal,2)} kVA`;
    document.getElementById('wmPF').textContent=formatMeter(values.pf,2);
    document.getElementById('wmLoadPower').textContent=`${formatMeter(values.loadPower,2)} kW`;
    document.getElementById('wmSolarPower').textContent=`${formatMeter(values.solarPower,2)} kW`;
    const loadFactor=Math.round(Math.max(0,Math.min(1.5,Number(state.loadFactor)||0))*100);
    document.getElementById('wmLoadFactor').value=String(loadFactor);
    document.getElementById('wmLoadFactorValue').textContent=`${loadFactor}%`;
    const grid=document.getElementById('wmGridPower'), caption=document.getElementById('wmGridCaption'), direction=document.getElementById('wmDirection');
    grid.textContent=`${formatMeter(Math.abs(values.pTotal),2)} kW`;
    grid.className=values.pTotal<-.005?'export':values.pTotal>.005?'import':'';
    caption.textContent=values.pTotal<-.005?'exportação estimada':values.pTotal>.005?'importação estimada':'sem intercâmbio';
    direction.textContent=values.pTotal<-.005?'EXPORTANDO':values.pTotal>.005?'IMPORTANDO':'SEM FLUXO';
  }
  const cableSections=[1.5,2.5,4,6,10,16,25,35,50,70,95,120,150,185,240,300,400,500];
  const ampacityPVC={
    B1:{2:[17.5,24,32,41,57,76,101,125,151,192,232,269,309,353,415,477,571,656],3:[15.5,21,28,36,50,68,89,110,134,171,207,239,275,314,370,426,510,587]},
    B2:{2:[16.5,23,30,38,52,69,90,111,133,168,201,232,265,300,351,401,477,545],3:[15,20,27,34,46,62,80,99,118,149,179,206,236,268,313,358,425,486]},
    C:{2:[19.5,27,36,46,63,85,112,138,168,213,258,299,344,392,461,530,634,729],3:[17.5,24,32,41,57,76,96,119,144,184,223,259,299,341,403,464,557,642]}
  };
  const temperatureFactors={25:1.06,30:1,35:.94,40:.87,45:.79,50:.71};
  const groupingFactors={B1:[1,.80,.70,.65,.60,.57,.54,.52],B2:[1,.80,.70,.65,.60,.57,.54,.52],C:[1,.85,.79,.75,.73,.72,.72,.71]};
  const dropData={
    mono08:[23.3,14.3,9,6.03,3.62,2.33,1.51,1.12,.85,.62,.48,.40,.37,.30,.26,.24,.22,.20],
    mono095:[27.6,16.8,10.6,7.05,4.21,2.69,1.71,1.25,.94,.67,.50,.41,.34,.29,.24,.21,.18,.17],
    tri08:[20.2,12.4,7.8,5.26,3.16,2.03,1.33,.98,.76,.55,.43,.36,.31,.27,.23,.21,.19,.17],
    tri095:[23.9,14.7,9.15,6.15,3.66,2.34,1.49,1.09,.82,.59,.44,.36,.30,.25,.21,.18,.15,.14]
  };
  const cableSettings=Object.assign({method:'B1',temperature:30,grouping:1,dropLimit:2},JSON.parse(localStorage.getItem('qgbtCableSettings')||'null')||{});
  const cableLengths=Object.assign({},JSON.parse(localStorage.getItem('qgbtCableLengths')||'null')||{});
  const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

  function defaultCircuitLength(circuit) {
    const text=String(circuit.desc||'').toLowerCase();
    if(/alimentador geral/.test(text)) return 15;
    if(/string cc/.test(text)) return 30;
    if(/inversor solar/.test(text)) return 20;
    if(/banco de capacitores/.test(text)) return 10;
    if(/chuveiro|ar.?cond|climat/.test(text)) return 15;
    if(/motor|bomba/.test(text)) return 30;
    if(/tomada/.test(text)) return 25;
    return 20;
  }

  function systemSizingCircuits() {
    const config=systemConfig(),voltage=config.voltage,loadPower=inputNumber('loadPower'),pf=Math.min(1,Math.max(.01,inputNumber('pfInitial')));
    const solarPower=inputNumber('solarPower'),invPf=Math.min(1,Math.max(.01,inputNumber('invPf'))),vmp=inputNumber('vmp');
    const breakers=[2,4,6,10,16,20,25,32,40,50,63,80,100,125,160,200,250,315,400,500,630,800,1000,1250];
    const nextBreaker=current=>breakers.find(value=>value>=current)||Math.ceil(current/100)*100;
    const mainCurrent=feederCurrent(loadPower,pf),solarCurrent=acSourceCurrent(solarPower,invPf),phase=config.phaseCode;
    const cap=capacitorDesign(),bess=calculateBatteryBank(),pv=pvDesign();
    return [
      {name:'ALIM',desc:`Alimentador geral · ${config.label}`,phase,hasNeutral:true,voltage,pf,designCurrent:mainCurrent,breaker:nextBreaker(mainCurrent),minSection:2.5},
      {name:'FV-CA',desc:`Inversor solar — saída CA · ${config.label}`,phase,hasNeutral:true,voltage,pf:invPf,designCurrent:solarCurrent,breaker:nextBreaker(solarCurrent),minSection:2.5},
      {name:'FV-CC',desc:'String CC solar individual (+/−)',phase:'DC',voltage:Math.max(1,pv.stringVmp||vmp),pf:1,designCurrent:pv.stringDesignCurrent,breaker:pv.stringFuse,minSection:2.5},
      {name:'FV-ARR',desc:'Saída CC combinada — validar distribuição por MPPT',phase:'DC',voltage:Math.max(1,pv.stringVmp||vmp),pf:1,designCurrent:pv.arrayDesignCurrent,breaker:pv.arrayProtection,minSection:2.5},
      {name:'CAP',desc:`Banco de capacitores · ${config.label}`,phase,hasNeutral:false,voltage,pf:1,designCurrent:cap.designCurrent,breaker:nextBreaker(cap.designCurrent),minSection:2.5},
      {name:'BESS',desc:'Banco de baterias CC (+/−)',phase:'DC',voltage:bess.bankVoltage,pf:1,designCurrent:bess.bankCurrent,breaker:bess.mainProtection,minSection:2.5}
    ];
  }
  function protectionSection(phaseSection) {
    if(phaseSection<=16) return phaseSection;
    if(phaseSection<=35) return 16;
    return cableSections.find(section=>section>=phaseSection/2)||phaseSection/2;
  }

  function voltageDropAt(circuit,sectionIndex,length,current) {
    const threePhase=circuit.phase==='T';
    const pf=Math.min(1,Math.max(.8,Number(circuit.pf)||1));
    const ratio=(pf-.8)/.15;
    const low=dropData[threePhase?'tri08':'mono08'][sectionIndex];
    const high=dropData[threePhase?'tri095':'mono095'][sectionIndex];
    const voltsPerAmpKm=low+(high-low)*ratio;
    const dropVolts=voltsPerAmpKm*current*length/1000;
    return {volts:dropVolts,percent:dropVolts/Math.max(1,Number(circuit.voltage)||1)*100};
  }

  function sizeCircuit(circuit,index) {
    const method=cableSettings.method, loaded=circuit.phase==='T'?3:2;
    const calculatedCurrent=Math.max(0,Number(circuit.power)||0)/(circuit.phase==='T'?Math.sqrt(3)*Math.max(1,Number(circuit.voltage)||1)*Math.max(.01,Number(circuit.pf)||1):Math.max(1,Number(circuit.voltage)||1)*Math.max(.01,Number(circuit.pf)||1));
    const current=Number.isFinite(Number(circuit.designCurrent))?Number(circuit.designCurrent):calculatedCurrent;
    const breaker=Math.max(0,Number(circuit.breaker)||0);
    const key=String(circuit.name||index), length=Math.max(.1,Number(cableLengths[key]??defaultCircuitLength(circuit))||1);
    const minSection=Number(circuit.minSection)||(/ilum/i.test(circuit.desc)?1.5:2.5);
    const tempFactor=temperatureFactors[cableSettings.temperature]||1;
    const groupFactor=groupingFactors[method][Math.max(1,Math.min(8,cableSettings.grouping))-1];
    const corrected=ampacityPVC[method][loaded].map(value=>value*tempFactor*groupFactor);
    let ampIndex=cableSections.findIndex((section,i)=>section>=minSection&&corrected[i]>=breaker);
    if(ampIndex<0) ampIndex=cableSections.length-1;
    let dropIndex=cableSections.findIndex((section,i)=>section>=minSection&&voltageDropAt(circuit,i,length,current).percent<=cableSettings.dropLimit);
    if(dropIndex<0) dropIndex=cableSections.length-1;
    const finalIndex=Math.max(ampIndex,dropIndex,cableSections.findIndex(section=>section>=minSection));
    const section=cableSections[finalIndex], drop=voltageDropAt(circuit,finalIndex,length,current), iz=corrected[finalIndex];
    const coordinated=breaker>=current&&iz>=breaker;
    let criterion=dropIndex>ampIndex?'Queda de tensão':ampIndex>cableSections.findIndex(s=>s>=minSection)?'Capacidade':'Seção mínima';
    if(breaker<current) criterion='Rever disjuntor: In < Ib';
    const displaySection=formatMeter(section,section%1?1:0);
    const neutral=circuit.phase==='DC'?`+ ${displaySection} + − ${displaySection} mm²`:circuit.phase==='T'?(circuit.hasNeutral?`3 × ${displaySection} + N ${displaySection} mm²`:`3 × ${displaySection} mm² · sem N`):circuit.phase==='B'?(circuit.hasNeutral?`2 × ${displaySection} + N ${displaySection} mm²`:`2 × ${displaySection} mm² · sem N`):`F ${displaySection} + N ${displaySection} mm²`;    return {current,breaker,length,section,neutral,pe:protectionSection(section),iz,drop,criterion,coordinated,key};
  }

  function renderCableSizing() {
    const body=document.getElementById('cableSizingBody');
    if(!body||typeof circuits==='undefined') return;
    const method=document.getElementById('cableMethod'), temp=document.getElementById('cableTemp'), group=document.getElementById('cableGrouping'), limit=document.getElementById('cableDropLimit');
    method.value=cableSettings.method;temp.value=String(cableSettings.temperature);group.value=String(cableSettings.grouping);limit.value=String(cableSettings.dropLimit);
    document.getElementById('cableTempFactor').textContent=formatMeter(temperatureFactors[cableSettings.temperature]||1,2);
    document.getElementById('cableGroupFactor').textContent=formatMeter(groupingFactors[cableSettings.method][Math.max(1,Math.min(8,cableSettings.grouping))-1],2);
    const sizingCircuits=[...systemSizingCircuits(),...circuits];
    body.innerHTML=sizingCircuits.map((circuit,index)=>{
      const sized=sizeCircuit(circuit,index), sectionDigits=sized.section%1?1:0, peDigits=sized.pe%1?1:0;
      const badgeClass=sized.coordinated?'cable-badge':'cable-badge warn';
      return `<tr><td><strong>${escapeHtml(circuit.name)}</strong></td><td>${escapeHtml(circuit.desc)}</td><td>${formatMeter(sized.current,1)} A</td><td>${formatMeter(sized.breaker,0)} A</td><td><input data-cable-length="${escapeHtml(sized.key)}" type="number" min="0.1" step="0.5" value="${sized.length}"> m</td><td><strong class="cable-size">${sized.neutral}</strong></td><td>${formatMeter(sized.pe,peDigits)} mm²</td><td>${formatMeter(sized.iz,1)} A</td><td><span class="${sized.drop.percent<=cableSettings.dropLimit?'drop-ok':'drop-warn'}">${formatMeter(sized.drop.percent,2)}%</span><br><small>${formatMeter(sized.drop.volts,2)} V</small></td><td><span class="${badgeClass}">${escapeHtml(sized.criterion)}</span></td></tr>`;
    }).join('');
  }

  function saveCableSettings() {
    localStorage.setItem('qgbtCableSettings',JSON.stringify(cableSettings));
    localStorage.setItem('qgbtCableLengths',JSON.stringify(cableLengths));
  }
  const spdaDefaults={risk:'pending',level:3,length:30,width:20,height:10};
  const spdaSettings=Object.assign({},spdaDefaults,JSON.parse(localStorage.getItem('qgbtSpdaSettings')||'null')||{});
  const spdaLevels={
    1:{roman:'I',sphere:20,mesh:5,spacing:10},
    2:{roman:'II',sphere:30,mesh:10,spacing:10},
    3:{roman:'III',sphere:45,mesh:15,spacing:15},
    4:{roman:'IV',sphere:60,mesh:20,spacing:20}
  };

  function spdaValue(id,fallback) {
    const parsed=parseFloat(document.getElementById(id)?.value);
    return Math.max(1,Number.isFinite(parsed)?parsed:fallback);
  }

  function calculateSPDA() {
    const risk=document.getElementById('spdaRisk')?.value||'pending';
    const level=Number(document.getElementById('spdaLevel')?.value)||3, data=spdaLevels[level];
    const length=spdaValue('spdaLength',30),width=spdaValue('spdaWidth',20),height=spdaValue('spdaHeight',10);
    const perimeter=2*(length+width),downs=Math.max(2,Math.ceil(perimeter/data.spacing));
    const lengthLines=Math.ceil(width/data.mesh)+1,widthLines=Math.ceil(length/data.mesh)+1;
    const roofConductor=lengthLines*length+widthLines*width,totalConductor=roofConductor+downs*height;
    const riskLabels={pending:'análise de risco pendente',required:'SPDA requerido',waived:'SPDA dispensado pela análise'};
    const statusLabels={pending:'Análise de risco obrigatória',required:'SPDA requerido · prosseguir com projeto',waived:'Dispensado somente pela análise documentada'};
    document.getElementById('spdaSummary').textContent=`Pré-estudo geométrico · nível ${data.roman} · ${riskLabels[risk]}`;
    document.getElementById('spdaStatus').textContent=statusLabels[risk];
    document.getElementById('spdaSphere').textContent=`${formatMeter(data.sphere,0)} m`;
    document.getElementById('spdaMesh').textContent=`${formatMeter(data.mesh,0)} × ${formatMeter(data.mesh,0)} m`;
    document.getElementById('spdaSpacing').textContent=`${formatMeter(data.spacing,0)} m`;
    document.getElementById('spdaDowns').textContent=`${downs} descidas`;
    document.getElementById('spdaPerimeter').textContent=`${formatMeter(perimeter,1)} m`;
    document.getElementById('spdaRoofConductor').textContent=`${formatMeter(roofConductor,1)} m`;
    document.getElementById('spdaTotalConductor').textContent=`${formatMeter(totalConductor,1)} m`;
    document.getElementById('spdaBlockCapture').textContent=`Nível ${data.roman} · R ${formatMeter(data.sphere,0)} m`;
    document.getElementById('spdaBlockMesh').textContent=`${formatMeter(data.mesh,0)} × ${formatMeter(data.mesh,0)} m`;
    document.getElementById('spdaBlockDowns').textContent=`${downs} unidades`;
    document.getElementById('spdaBlockEarth').textContent=`anel ${formatMeter(perimeter,1)} m`;
    const downBlocks=document.getElementById('spdaDownBlocks'),visibleDowns=Math.min(downs,16);
    downBlocks.innerHTML=Array.from({length:visibleDowns},(_,index)=>`<button type="button" class="dynamic-branch" data-spda-block="downs" title="Descida ${index+1}: caminho externo até o aterramento">D${index+1} · ${formatMeter(height,1)} m</button>`).join('')+(downs>visibleDowns?`<span class="dynamic-branch">+${downs-visibleDowns} descidas</span>`:'');
    const spdaPanel=document.getElementById('spdaBlockDiagram');
    spdaPanel.classList.toggle('risk-pending',risk==='pending');spdaPanel.classList.toggle('risk-waived',risk==='waived');
    spdaPanel.classList.add('is-updating');setTimeout(()=>spdaPanel.classList.remove('is-updating'),360);
    Object.assign(spdaSettings,{risk,level,length,width,height});
    localStorage.setItem('qgbtSpdaSettings',JSON.stringify(spdaSettings));
    return {risk,level,...data,length,width,height,perimeter,downs,roofConductor,totalConductor};
  }

  const pvMainFields={pvTargetPower:'solarPower',pvModulePower:'modulePower',pvVoc:'voc',pvVmp:'vmp',pvIsc:'isc',pvVdcMax:'vdcMax',pvMpptMin:'mpptMin'};
  const pvProtectionRatings=[10,12,15,16,20,25,32,40,50,63,80,100,125,160,200,250,315,400,500,630];

  function pvValue(id,fallback,min=.01) {
    const parsed=parseFloat(document.getElementById(id)?.value);
    return Math.max(min,Number.isFinite(parsed)?parsed:fallback);
  }

  function pvDesign() {
    const targetPower=pvValue('pvTargetPower',inputNumber('solarPower'),0);
    const modulePower=pvValue('pvModulePower',inputNumber('modulePower'));
    const voc=pvValue('pvVoc',inputNumber('voc')), vmp=pvValue('pvVmp',inputNumber('vmp'));
    const isc=pvValue('pvIsc',inputNumber('isc')), vdcMax=pvValue('pvVdcMax',inputNumber('vdcMax'));
    const mpptMin=pvValue('pvMpptMin',inputNumber('mpptMin'));
    const coldFactor=1.0675, hotFactor=.8425;
    const seriesMax=Math.max(0,Math.floor(vdcMax/(voc*coldFactor)));
    const seriesMin=Math.max(1,Math.ceil(mpptMin/(vmp*hotFactor)));
    const compatible=seriesMin<=seriesMax;
    const desiredModules=targetPower>0?Math.ceil(targetPower*1000/modulePower):0;
    let series=0,parallel=0;
    if(desiredModules&&compatible){
      let best=null;
      for(let ns=seriesMin;ns<=seriesMax;ns++){
        const np=Math.ceil(desiredModules/ns),count=ns*np;
        if(!best||count<best.count||(count===best.count&&np<best.parallel))best={series:ns,parallel:np,count};
      }
      series=best.series;parallel=best.parallel;
    }
    const modules=series*parallel,installedPower=modules*modulePower/1000;
    const stringVmp=series*vmp,stringVocCold=series*voc*coldFactor;
    const stringDesignCurrent=modules?1.25*isc:0,arrayDesignCurrent=stringDesignCurrent*parallel;
    const nextProtection=current=>pvProtectionRatings.find(rating=>rating>=current)||Math.ceil(current/100)*100;
    const stringFuse=modules?nextProtection(stringDesignCurrent):0,arrayProtection=modules?nextProtection(arrayDesignCurrent):0;
    return {targetPower,modulePower,voc,vmp,isc,vdcMax,mpptMin,coldFactor,hotFactor,seriesMin,seriesMax,compatible,desiredModules,series,parallel,modules,installedPower,stringVmp,stringVocCold,stringDesignCurrent,arrayDesignCurrent,stringFuse,arrayProtection};
  }

  function updatePVArray() {
    const design=pvDesign(), hasArray=design.modules>0;
    document.getElementById('pvSummary').textContent=hasArray?`${design.modules} módulos · ${formatMeter(design.installedPower,1)} kWp · ${design.series}S × ${design.parallel}P`:'Configuração incompatível ou potência zero';
    document.getElementById('pvConfiguration').textContent=hasArray?`${design.series}S × ${design.parallel}P`:'—';
    document.getElementById('pvModules').textContent=hasArray?String(design.modules):'0';
    document.getElementById('pvInstalled').textContent=`${formatMeter(design.installedPower,2)} kWp`;
    document.getElementById('pvStringVmp').textContent=hasArray?`${formatMeter(design.stringVmp,1)} V`:'—';
    document.getElementById('pvStringVoc').textContent=hasArray?`${formatMeter(design.stringVocCold,1)} V`:'—';
    document.getElementById('pvArrayCurrent').textContent=hasArray?`${formatMeter(design.arrayDesignCurrent,1)} A`:'—';
    document.getElementById('pvProtection').textContent=hasArray?`${formatMeter(design.stringFuse,0)} A/string · ${formatMeter(design.arrayProtection,0)} A geral`:'—';
    const windowOutput=document.getElementById('pvWindow');
    windowOutput.textContent=design.compatible?`${design.seriesMin} a ${design.seriesMax} · compatível`:`${design.seriesMin} a ${design.seriesMax} · incompatível`;
    windowOutput.className=design.compatible?'pv-window-ok':'pv-window-warn';
    document.getElementById('pvFormula').textContent=hasArray?`${design.series} módulos em série × ${design.parallel} strings em paralelo`:'Rever tensão máxima e faixa MPPT do inversor';
    const strings=document.getElementById('pvStrings');
    const visibleStrings=Math.min(design.parallel,12),visibleModules=Math.min(design.series,12);
    strings.innerHTML=hasArray?Array.from({length:visibleStrings},(_,stringIndex)=>`<div class="pv-string-line"><span class="pv-string-label">STR ${stringIndex+1}</span>${Array.from({length:visibleModules},(_,moduleIndex)=>`<i class="pv-module" data-pv-string="${stringIndex+1}" data-pv-module="${moduleIndex+1}"></i>`).join('')}${design.series>visibleModules?`<span class="pv-more">+${design.series-visibleModules}</span>`:''}</div>`).join('')+(design.parallel>visibleStrings?`<div class="pv-string-line"><span class="pv-more">+ ${design.parallel-visibleStrings} strings idênticas</span></div>`:''):'<div class="pv-string-line"><span class="pv-more">Sem arranjo válido para representar.</span></div>';
    return design;
  }

  function syncPVFromMain() {
    Object.entries(pvMainFields).forEach(([pvId,mainId])=>{const pvField=document.getElementById(pvId),mainField=document.getElementById(mainId);if(pvField&&mainField)pvField.value=mainField.value});
    updatePVArray();
  }

  const batteryDefaults={chemistry:'lfp',moduleV:51.2,moduleAh:100,targetV:384,loadKw:20,autonomyH:2,dod:80,efficiency:92,margin:20};
  const batterySettings=Object.assign({},batteryDefaults,JSON.parse(localStorage.getItem('qgbtBatterySettings')||'null')||{});
  const batteryFields={chemistry:'bessChemistry',moduleV:'bessModuleV',moduleAh:'bessModuleAh',targetV:'bessTargetV',loadKw:'bessLoadKw',autonomyH:'bessAutonomyH',dod:'bessDod',efficiency:'bessEfficiency',margin:'bessMargin'};
  const batteryProtectionRatings=[16,20,25,32,40,50,63,80,100,125,160,200,250,315,400,500,630,800,1000,1250];

  function batteryValue(id,fallback,min=.01,max=Infinity) {
    return Math.min(max,Math.max(min,parseFloat(document.getElementById(id)?.value)||fallback));
  }

  function calculateBatteryBank() {
    const chemistry=document.getElementById('bessChemistry')?.value||'lfp';
    const moduleV=batteryValue('bessModuleV',51.2), moduleAh=batteryValue('bessModuleAh',100);
    const targetV=batteryValue('bessTargetV',384,12), loadKw=batteryValue('bessLoadKw',20);
    const autonomyH=batteryValue('bessAutonomyH',2), dod=batteryValue('bessDod',80,10,100)/100;
    const efficiency=batteryValue('bessEfficiency',92,10,100)/100, margin=batteryValue('bessMargin',20,0,100)/100;
    const series=Math.max(1,Math.ceil(targetV/moduleV)), bankVoltage=series*moduleV;
    const moduleKwh=moduleV*moduleAh/1000, stringKwh=series*moduleKwh;
    const requiredNominal=loadKw*autonomyH*(1+margin)/(dod*efficiency);
    const parallel=Math.max(1,Math.ceil(requiredNominal/stringKwh)), modules=series*parallel;
    const bankAh=moduleAh*parallel, nominalKwh=stringKwh*parallel, usableKwh=nominalKwh*dod*efficiency;
    const actualAutonomy=usableKwh/loadKw, bankCurrent=loadKw*1000/(bankVoltage*efficiency), stringCurrent=bankCurrent/parallel;
    const nextRating=current=>batteryProtectionRatings.find(rating=>rating>=current)||Math.ceil(current/100)*100;
    const bmsRating=nextRating(stringCurrent*1.25), mainProtection=nextRating(bankCurrent*1.25);
    document.getElementById('bessSummary').textContent=`${modules} módulos · ${formatMeter(nominalKwh,1)} kWh · ${formatMeter(bankVoltage,1)} V`;
    document.getElementById('bessConfiguration').textContent=`${series}S × ${parallel}P`;
    document.getElementById('bessModules').textContent=String(modules);
    document.getElementById('bessVoltage').textContent=`${formatMeter(bankVoltage,1)} V · ${formatMeter(bankAh,0)} Ah`;
    document.getElementById('bessNominal').textContent=`${formatMeter(nominalKwh,1)} kWh`;
    document.getElementById('bessUsable').textContent=`${formatMeter(usableKwh,1)} kWh`;
    document.getElementById('bessAutonomy').textContent=`${formatMeter(actualAutonomy,2)} h`;
    document.getElementById('bessBankCurrent').textContent=`${formatMeter(bankCurrent,1)} A`;
    document.getElementById('bessProtection').textContent=`BMS ${formatMeter(bmsRating,0)} A/ramal · geral ${formatMeter(mainProtection,0)} A`;
    document.getElementById('bessFormula').textContent=`${series} em série × ${parallel} ramais em paralelo = ${modules} módulos`;
    document.getElementById('bessBlockBank').textContent=`${series}S × ${parallel}P · ${formatMeter(nominalKwh,1)} kWh`;
    document.getElementById('bessBlockBranch').textContent=`BMS ${formatMeter(bmsRating,0)} A/ramal`;
    document.getElementById('bessBlockMain').textContent=`${formatMeter(mainProtection,0)} A · ${formatMeter(bankVoltage,0)} Vcc`;
    document.getElementById('bessBlockPcs').textContent=`${formatMeter(loadKw,1)} kW · η ${formatMeter(efficiency*100,0)}%`;
    document.getElementById('bessBlockLoad').textContent=`${formatMeter(actualAutonomy,2)} h estimadas`;
    const branchBlocks=document.getElementById('bessBranchBlocks'),visibleBranches=Math.min(parallel,12);
    branchBlocks.innerHTML=Array.from({length:visibleBranches},(_,index)=>`<button type="button" class="dynamic-branch" data-bess-block="branch" title="Ramal ${index+1}: ${series} módulos em série, protegido por BMS/dispositivo dedicado">R${index+1} · ${series}S · ${formatMeter(stringCurrent,1)} A</button>`).join('')+(parallel>visibleBranches?`<span class="dynamic-branch">+${parallel-visibleBranches} ramais</span>`:'');
    const bessPanel=document.getElementById('bessBlockDiagram');bessPanel.classList.add('is-updating');setTimeout(()=>bessPanel.classList.remove('is-updating'),360);
    const cells=document.getElementById('bessCells');
    cells.innerHTML=Array.from({length:Math.min(modules,24)},(_,index)=>`<span class="battery-cell">${index+1}</span>`).join('')+(modules>24?`<span class="battery-cell">+${modules-24}</span>`:'');
    Object.assign(batterySettings,{chemistry,moduleV,moduleAh,targetV,loadKw,autonomyH,dod:dod*100,efficiency:efficiency*100,margin:margin*100});
    localStorage.setItem('qgbtBatterySettings',JSON.stringify(batterySettings));
    return {series,parallel,modules,bankVoltage,bankAh,nominalKwh,usableKwh,actualAutonomy,bankCurrent,stringCurrent,bmsRating,mainProtection};
  }

  function render() {
    const config=systemConfig(),busLive=state.general;
    const inverterActive=busLive&&state.solar&&state.sun;
    const loadStates={load1:busLive&&state.load1,load2:busLive&&state.load2&&config.mode!=='mono',motor:busLive&&state.motor&&config.mode==='tri',ac:busLive&&state.ac&&config.mode==='tri',shower:busLive&&state.shower};
    const availableLoads=config.mode==='tri'?5:config.mode==='bi'?3:2;
    keys.forEach(key => {
      const el = document.querySelector(`[data-breaker="${key}"]`);
      if (!el) return;
      el.classList.toggle('off', !state[key]);
      el.setAttribute('aria-checked', String(state[key]));
      const label = el.querySelector(`[data-state-label="${key}"]`);
      if (label) label.textContent = state[key] ? 'LIGADO' : 'DESLIGADO';
    });
    const compatibility={load1:true,load2:config.mode!=='mono',motor:config.mode==='tri',ac:config.mode==='tri',shower:true};
    Object.entries(compatibility).forEach(([key,compatible])=>{document.querySelectorAll(`[data-breaker="${key}"],[data-load="${key}"]`).forEach(el=>el.classList.toggle('mode-unavailable',!compatible));const label=document.querySelector(`[data-state-label="${key}"]`);if(label&&!compatible)label.textContent='NÃO DISP.'});
    document.querySelectorAll('[data-bus]').forEach(el => { el.classList.toggle('is-live',busLive); el.classList.toggle('is-dead',!busLive); });

    setWire('grid-source', true); setWire('grid-output', busLive);
    setWire('solar-dc', state.sun); setWire('solar-ac', inverterActive); setWire('solar-bus', busLive);
    setWire('cap-pre', busLive); setWire('cap-post', busLive && state.capacitor);
    setWire('load1-pre', busLive); setWire('load1-post', loadStates.load1);
    setWire('load2-pre', busLive); setWire('load2-post', loadStates.load2);
    setWire('motor-pre', busLive); setWire('motor-post', loadStates.motor);
    setWire('ac-pre', busLive); setWire('ac-post', loadStates.ac);
    setWire('shower-pre', busLive); setWire('shower-post', loadStates.shower);
    ['l1','l2','l3'].forEach((phase,index)=>{const active=config.phases.includes(`L${index+1}`);document.querySelectorAll(`.sim-wire.${phase},.sim-bus.${phase}`).forEach(el=>{el.classList.toggle('phase-unavailable',!active);if(!active){el.classList.remove('is-live');el.classList.add('is-dead')}})});
    Object.entries(loadStates).forEach(([key,on]) => { document.querySelectorAll(`[data-load="${key}"] .sim-load-glow`).forEach(glow => glow.classList.toggle('sim-load-off',!on)); });
    const inverterText = document.querySelector('[data-inverter-status]');
    if (inverterText) inverterText.textContent = inverterActive ? 'injetando na rede' : (!state.sun ? 'sem irradiância' : !busLive ? 'anti-ilhamento ativo' : 'DJ CA desligado');
    const activeLoads = Object.values(loadStates).filter(Boolean).length;
    document.getElementById('stateBus').textContent = busLive ? 'Energizados' : 'Desenergizados';
    document.getElementById('stateBus').className = busLive ? '' : 'offline';
    document.getElementById('stateSolar').textContent = inverterActive ? 'Injetando no QGBT' : (!state.sun ? 'Sem geração' : !busLive ? 'Bloqueada por anti-ilhamento' : 'DJ solar desligado');
    document.getElementById('stateSolar').className = inverterActive ? 'solar-live' : 'offline';
    document.getElementById('stateLoads').textContent = `${activeLoads} de ${availableLoads} compatíveis ligados`;
    document.getElementById('stateLoads').className = activeLoads ? '' : 'offline';
    const readout = document.getElementById('simReadout');
    readout.className = 'sim-readout';
    if (!busLive) { readout.classList.add('is-off'); readout.textContent = state.sun ? 'QGBT desenergizado. Atenção: a entrada da concessionária e o lado CC solar permanecem com tensão.' : 'QGBT desenergizado. A entrada da concessionária permanece com tensão antes do disjuntor geral.'; }
    else if (inverterActive) { readout.classList.add('is-solar'); readout.textContent = `${config.label}: barramentos energizados. O inversor solar está injetando energia no QGBT.`; }
    else { readout.textContent = `${config.label}: barramentos energizados. Geração solar sem injeção neste momento.`; }    document.getElementById('toggleSun').textContent = state.sun ? '☀ Sol presente' : '☁ Sem geração';
    document.getElementById('toggleFlow').textContent = state.animate ? 'Pausar animação' : 'Animar fluxo';
    updateMeter();
    updateCapComposition();
    localStorage.setItem('qgbtSimulatorState', JSON.stringify(state));
  }

  document.querySelectorAll('[data-breaker]').forEach(el => {
    const toggle = () => { const key=el.dataset.breaker; state[key]=!state[key]; render(); };
    el.addEventListener('click', toggle);
    el.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){ e.preventDefault(); toggle(); } });
  });
  document.getElementById('allOff').addEventListener('click', () => { keys.forEach(k=>state[k]=false); render(); });
  document.getElementById('allOn').addEventListener('click', () => { keys.forEach(k=>state[k]=true); render(); });
  document.getElementById('toggleSun').addEventListener('click', () => { state.sun=!state.sun; render(); });
  document.getElementById('toggleFlow').addEventListener('click', () => { state.animate=!state.animate; render(); });
  document.getElementById('resetEnergy').addEventListener('click',()=>{meterState.energy=0;meterState.lastTime=performance.now();updateMeter(false)});
  let reportDetailsState=[],reportPreviousTitle='';
  function prepareCompactReport(){
    if(!document.body.classList.contains('report-printing')){reportDetailsState=[...document.querySelectorAll('.battery-accordion')].map(details=>({details,open:details.open}));reportPreviousTitle=document.title;}
    document.body.classList.add('report-printing');reportDetailsState.forEach(item=>item.details.open=true);
    const now=new Date(),mode=systemConfig().label;
    document.getElementById('reportDate').textContent=now.toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'});
    document.getElementById('reportMode').textContent=mode;
    document.querySelector('.report-head')?.setAttribute('aria-hidden','false');
    const localDate=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;document.title=`Relatorio-QGBT-${mode.split(' · ')[0]}-${localDate}`;
    updateMeter(false);updateCapComposition();updatePVArray();calculateBatteryBank();calculateSPDA();renderCableSizing();
  }
  function restoreCompactReport(){
    reportDetailsState.forEach(item=>item.details.open=item.open);document.body.classList.remove('report-printing');document.querySelector('.report-head')?.setAttribute('aria-hidden','true');if(reportPreviousTitle)document.title=reportPreviousTitle;reportDetailsState=[];
  }
  document.getElementById('reportBtn')?.addEventListener('click',()=>{prepareCompactReport();requestAnimationFrame(()=>requestAnimationFrame(()=>window.print()))});
  window.addEventListener('beforeprint',prepareCompactReport);window.addEventListener('afterprint',restoreCompactReport);  document.getElementById('wmLoadFactor').addEventListener('input',event=>{state.loadFactor=Math.max(0,Math.min(1.5,Number(event.target.value)/100));render()});
  ['voltage','solarPower','loadPower','pfInitial','pfTarget','invPf','isc','vmp','voc','vdcMax','mpptMin','modulePower'].forEach(id=>document.getElementById(id)?.addEventListener('input',()=>{updateMeter(false);updateCapComposition();renderCableSizing()}));
  Object.entries(pvMainFields).forEach(([pvId,mainId])=>{
    document.getElementById(mainId)?.addEventListener('input',()=>{const pvField=document.getElementById(pvId),mainField=document.getElementById(mainId);if(pvField&&mainField)pvField.value=mainField.value;updatePVArray()});
    document.getElementById(pvId)?.addEventListener('input',()=>{const pvField=document.getElementById(pvId),mainField=document.getElementById(mainId);if(mainField&&pvField){mainField.value=pvField.value;mainField.dispatchEvent(new Event('input',{bubbles:true}))}else updatePVArray()});
  });
  document.getElementById('systemMode')?.addEventListener('change',()=>setTimeout(()=>{updateMeter(false);updateCapComposition();render();renderCableSizing()},0));
  document.getElementById('circuitBody')?.addEventListener('change',()=>setTimeout(()=>{updateMeter(false);renderCableSizing()},0));
  document.getElementById('addCircuit')?.addEventListener('click',()=>setTimeout(()=>{updateMeter(false);renderCableSizing()},0));
  document.getElementById('cableMethod')?.addEventListener('change',event=>{cableSettings.method=event.target.value;saveCableSettings();renderCableSizing()});
  document.getElementById('cableTemp')?.addEventListener('change',event=>{cableSettings.temperature=Number(event.target.value);saveCableSettings();renderCableSizing()});
  document.getElementById('cableGrouping')?.addEventListener('change',event=>{cableSettings.grouping=Number(event.target.value);saveCableSettings();renderCableSizing()});
  document.getElementById('cableDropLimit')?.addEventListener('input',event=>{cableSettings.dropLimit=Math.max(.5,Number(event.target.value)||2);saveCableSettings();renderCableSizing()});
  document.getElementById('cableSizingBody')?.addEventListener('change',event=>{if(!event.target.matches('[data-cable-length]'))return;cableLengths[event.target.dataset.cableLength]=Math.max(.1,Number(event.target.value)||1);saveCableSettings();renderCableSizing()});
  const spdaFields={risk:'spdaRisk',level:'spdaLevel',length:'spdaLength',width:'spdaWidth',height:'spdaHeight'};
  Object.entries(spdaFields).forEach(([key,id])=>{const field=document.getElementById(id);if(field)field.value=String(spdaSettings[key])});
  Object.values(spdaFields).forEach(id=>document.getElementById(id)?.addEventListener('input',calculateSPDA));
  Object.entries(batteryFields).forEach(([key,id])=>{const field=document.getElementById(id);if(field) field.value=String(batterySettings[key])});
  Object.values(batteryFields).forEach(id=>document.getElementById(id)?.addEventListener('input',()=>{calculateBatteryBank();renderCableSizing()}));
  document.getElementById('bessChemistry')?.addEventListener('change',event=>{
    const presets={lfp:{moduleV:51.2,dod:80,efficiency:92},nmc:{moduleV:51.2,dod:80,efficiency:92},agm:{moduleV:12,dod:50,efficiency:85}};
    const preset=presets[event.target.value];
    if(preset){document.getElementById('bessModuleV').value=preset.moduleV;document.getElementById('bessDod').value=preset.dod;document.getElementById('bessEfficiency').value=preset.efficiency}
    calculateBatteryBank();
    renderCableSizing();
  });
  setInterval(()=>updateMeter(true),1000);
  syncPVFromMain();
  calculateSPDA();
  calculateBatteryBank();
  render();
  if (typeof window.calculate === 'function') window.calculate();
  renderCableSizing();
})();
