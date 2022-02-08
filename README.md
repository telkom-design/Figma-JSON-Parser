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
FIGMA_TOKEN=<Your Figma TOKEN>
FIGMA_ID=<Your Figma File ID>
FIGMA_API=https://api.figma.com
OUTPUT_MAIN=output/main.json
```
6. Start your program
```sh
npm run start
```