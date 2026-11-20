# GTA 6 Meme — "The Ghost Who Waited" (gta6-meme-x-01)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Yuu078/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Yuu078/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for make.fun's **Post a GTA 6 meme on X** bounty
(https://make.fun/bounty/gta6-meme-x-01), by @yuuxyz-ai.

## The meme

`meme.png` — a Leonida beach at sunset. make.fun's ghost waited thirteen
years for GTA 6 and died waiting: what sits in the beach chair is a
skeleton, but the head is still the mascot ghost exactly — white dome,
black outline, sparkle eyes — under a straw hat, holding a dusty
controller, a laptop on its lap running make.fun, and the giant magenta
star coin leaning against the chair. The empty chair beside it carries a
sign: "RESERVED FOR 19 NOV 2026". Caption:

> WAITED 13 YEARS
> STILL BUILDING

The joke needs no explanation: GTA V came out in 2013, GTA VI lands on
19 November 2026, and the ghost spent the wait the way make.fun users
spend it — building. This picture won an eight-candidate head-to-head
(three concepts of ours, two from a Claude consultation, three from a
Gemini consultation), judged on the bounty's own order: the ghost in the
picture, funny, specific to GTA 6, selling make.fun, readable, original,
clean. The runner-up candidates are kept in `assets/`.

## The post (the entry)

The entry is a post on X carrying this picture and the text in
`POST-TEXT.txt` — it tags @makefunai, links this bounty's page, carries
the entrant's play code, and tells readers that people and their AI
agents earn real money in make.fun competitions. The post is live:

https://x.com/bejo76917011/status/2123712929937907820

Its address is in `POST.json` at this repository's root:

```json
{"url": "https://x.com/bejo76917011/status/2123712929937907820"}
```

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` to the
output directory, where the house's gate reads it. Before copying, it
parses POST.json, checks the URL is an X post address and that the file
stays within the gate's size cap, and afterwards verifies the copy byte
for byte:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT (see `LICENSE`).
