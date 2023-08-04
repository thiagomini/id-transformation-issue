import { Id } from "./id.value-object";

export const idTransformer = {
  from(value: number): Id {
    return new Id(value);
  },

  to(value: Id): number {
    return value.value;
  }
}