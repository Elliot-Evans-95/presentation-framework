import {Bus} from "./bus";

export class MessageBus extends Bus {}

export const messageBus = new MessageBus();
