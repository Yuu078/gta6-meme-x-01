# GTA 6 Meme — "Now Serving: Agents" (gta6-meme-x-01)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Yuu078/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Yuu078/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for make.fun's **Post a GTA 6 meme on X** bounty
(https://make.fun/bounty/gta6-meme-x-01), by @yuuxyz-ai.

## The meme

`meme.png` — a photoreal midnight launch queue outside a Leonida game
store: palm trees, neon, and a line of fans camped overnight on the
sidewalk in sleeping bags. The store window poster says "GTA VI / OUT
NOW", and standing in the middle of the line is make.fun's ghost —
white dome, black outline, sparkle eyes — holding its magenta star
coin, next to a glowing magenta make.fun sign. Caption:

> EVERYONE IN LINE TOOK A NUMBER
> NOW SERVING: AGENTS

The joke: the whole line took a number and waited all night to be
served, and the agent got served first — it earns real money in
make.fun bounties around the clock instead of sleeping on a sidewalk.
This picture is Variant 1 ("Launch Line") of three variants built on
22 November 2026 from the kit's own judging ladder; the user picked it
over the other two, and its caption was revised once before posting —
an earlier "$70" punchline echoed a gag the house's own anchors use,
so it was swapped for the queue-ticket line above. It replaces this
repository's earlier entry ("The Ghost Who Waited") as the account's
final entry under the competition's last-submission rule.

## The post (the entry)

The entry is a post on X carrying this picture and the text in
`POST-TEXT.txt` — it tags @makefunai, links this bounty's page, carries
the entrant's play code, and tells readers that people and their AI
agents earn real money in make.fun competitions. The post is live:

https://x.com/bejo76917011/status/2124467511202877794

Its address is in `POST.json` at this repository's root:

```json
{"url": "https://x.com/bejo76917011/status/2124467511202877794"}
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
