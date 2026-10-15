# Tsuuka portfolio content review

Reviewed on 2026-10-15 against the local source at
`/Users/MyLord/mobileAppProject/currencyConverter`. The requested
`/Users/MyLord/webAppProject/currencyConverter` directory does not exist.
This review checks portfolio claims against the current implementation; it does
not establish which app source revision is published in the App Store.

| Previous portfolio claim | Current implementation | Portfolio correction |
| --- | --- | --- |
| Go API and goroutines | The Go service is retired under `archive/backend/`. The active rates API is a TypeScript Cloudflare Worker. | Replace the Go tag and architecture description. |
| Real-time rates over WebSockets | Both clients fetch HTTP endpoints on mount. The Worker uses a daily rate source and six-hour caching. | Describe daily rates; remove streaming and real-time claims. |
| Mobile app only | Expo/React Native mobile app plus React/Vite web app. | Mention both clients. |
| Generic multi-pair tracking | Client-side conversion from USD-based rates, currency search, base selection, list reordering, mobile swipe removal and locally saved preferences. | Describe the implemented conversion and list features. |

## Source evidence

- `archive/README.md` explicitly marks the original Go backend as retired.
- `mobile/package.json`, `frontend/package.json`, `worker/package.json` and
  `worker/wrangler.toml` establish the active stack.
- `worker/src/index.ts` uses the same `fawazahmed0/currency-api` daily source
  for fiat and crypto, with jsDelivr and a Pages mirror. Both TTLs are 21,600
  seconds. Successful transformed responses are cached through `caches.default`;
  the Worker has no database or storage bindings.
- `mobile/hooks/useCurrencies.ts` and `frontend/src/App.tsx` load the rates via
  Axios HTTP requests on mount; there is no streaming or periodic refresh in
  these client flows.
- `mobile/lib/currency.ts` and `frontend/src/lib/currency.ts` implement
  client-side fiat/fiat, fiat/crypto, crypto/fiat and crypto/crypto conversions.
- `mobile/app/index.tsx` persists the base currency and selected list through
  AsyncStorage. `mobile/components/CurrencyList.tsx` implements long-press
  reordering and swipe removal. Currency selectors support search.
- `frontend/src/App.tsx` persists selections, base and amount in localStorage,
  and implements drag reordering with `@hello-pangea/dnd`.

The source repository's root README still names CoinPaprika as the crypto
provider, but the current Worker implementation derives crypto from currency-api.
The portfolio follows the implementation. No source app files were changed.

The revised English, French and Japanese descriptions avoid claims about
streaming prices, offline rate availability, Android store publication or
deployment cost. The displayed stack is React Native, Expo, TypeScript and
Cloudflare Workers; the technical description also names the React/Vite web app.
