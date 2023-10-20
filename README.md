* Clone this repo and navigate to its root
* Run `yarn install`
* Run `yarn parcel index.html`
* Open `http://localhost:1234` in your browser, or whichever URL parcel gives you
* Open DevTools
* Observe the error logged in the DevTools console upon model loading:
```
Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
    at JSON.parse (<anonymous>)
    at getModelJSON (hub.js:551:17)
    at async Promise.all (:61216/index 0)
    at async loadTokenizer (tokenizers.js:52:16)
    at async AutoTokenizer.from_pretrained (tokenizers.js:3826:48)
    at async Promise.all (:61216/index 0)
    at async loadItems (pipelines.js:2193:5)
    at async pipeline (pipelines.js:2139:19)
    at async app.js:9:14
```
