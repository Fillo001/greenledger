# Architecture Notes

**Flow**: Client → Express API → Hedera Client → HCS Topic → Explorer (view messages)

**HCS Message Schema** (JSON):
```json
{
  "type": "TREE_PLANTED",
  "lat": 9.05785,
  "lng": 7.49508,
  "photoHash": "Qm...",
  "metadata": { "species": "Neem", "count": 10 },
  "ts": 1735171200000
}
