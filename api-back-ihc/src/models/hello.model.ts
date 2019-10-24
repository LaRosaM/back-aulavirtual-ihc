import { Model, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Hello extends Model {
  @property({
    type: 'number',
    id: true,
    required: true,
    generated: true,
  })
  id: number;
  @property({
    type: 'string'
  })
  mensaje: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Hello>) {
    super(data);
  }
}

export interface HelloRelations {
  // describe navigational properties here
}

export type HelloWithRelations = Hello & HelloRelations;
