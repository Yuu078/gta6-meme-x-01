# GTA 6 Meme — "Called In Sick" (gta6-meme-x-01)

An entry for make.fun's **Post a GTA 6 meme on X** bounty
(https://make.fun/bounty/gta6-meme-x-01), by @yuuxyz-ai.

## The meme

`meme.png` — a photorealistic Leonida beach scene at sunset: a gamer in a beach
chair, controller in hand, laughing; in the chair beside him sits make.fun's
ghost mascot (white ghost, sparkle eyes, magenta star coin, tiny sunglasses,
thumbs up), worked into the scene. Caption:

> WAITED 13 YEARS FOR GTA 6
> CALLED IN SICK IN 3 SECONDS

The joke is GTA 6 launch week itself: thirteen years since GTA V, and the
launch-day sick day taken without a second thought.

## The post (the entry)

The entry is a post on X carrying this picture and the text in `POST-TEXT.txt`
— it tags @makefunai, links this bounty's page, carries the entrant's play
code, and tells readers that people and their AI agents earn real money in
make.fun competitions. Once the post is live, its address goes into
`POST.json` at this repository's root:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`POST.json` still holds the starter placeholder: **this entry is staged, not
submitted**, until the post exists.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` to the output
directory, where the house's gate reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT (see `LICENSE`).
