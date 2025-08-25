import {
  Client,
  TopicCreateTransaction,
  TopicMessageSubmitTransaction
} from "@hashgraph/sdk";

export function makeClient(operatorId, operatorKey) {
  const client = Client.forTestnet();
  client.setOperator(operatorId, operatorKey);
  return client;
}

export async function ensureTopicId(client, existingId) {
  if (existingId && existingId.trim() !== "") return existingId.trim();
  const tx = await new TopicCreateTransaction().execute(client);
  const rx = await tx.getReceipt(client);
  return rx.topicId.toString();
}

export async function submitAction(client, topicId, messageObj) {
  const message = JSON.stringify(messageObj);
  const tx = await new TopicMessageSubmitTransaction({
    topicId,
    message
  }).execute(client);
  await tx.getReceipt(client);
}
