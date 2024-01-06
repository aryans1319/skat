import { Kafka, Producer } from "kafkajs";
import fs from 'fs';
import path from 'path';

const kafka = new Kafka({
    brokers: ["kafka-10f05060-skat.a.aivencloud.com:28225"],
    ssl: {
        ca: [fs.readFileSync(path.resolve('./ca.pem'), "utf-8" )],
    },
    sasl: {
        username: "avnadmin",
        password: "AVNS_DdqQX9RLQmjmkLFaIsd",
        mechanism: "plain",
    },
});

let producer: null | Producer = null;


export async function createProducer() {
    // so that it doesn't create a new producer everytime
    if(producer) return producer;

    const _producer = kafka.producer();
    await _producer.connect();

    producer = _producer;

    return producer;
}

export async function produceMesage(message: string) {
    const producer = await createProducer();

    await producer.send({
        messages: [{ key: `message-${Date.now()}`, value: message }],
        topic: "MESSAGES",
    })
    return true;
}

export default kafka;