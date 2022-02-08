# Figma JSON Parser

This program is intend to convert figma frame-by-frame to JSON file

![Preview](/preview.png)

## How To Install?

1. Clone this repo with git clone command
```sh
git clone https://github.com/telkom-design/Figma-JSON-Parser
```
2. Change to work directory
```sh
cd Figma-JSON-Parser
```
3. Install with `npm`
```sh
npm install
```
4. Create `.env` file at root work dir
```sh
touch .env
```
5. Configure `.env` with this environment
```
FIGMA_TOKEN=321227-f302de1c-9339-49b3-901b-561d48ceb228
FIGMA_ID=Hzqg2Mi3qcRbYVa5MsYy27
FIGMA_API=https://api.figma.com
OUTPUT_MAIN=output/main.json
```
6. Start your program / Fetch newest change on figma
```sh
npm run start
```

## What's Next?

You can saw output file at output directory
```sh
cd output
```