import { Keyword } from "./keyword.model";
import { Unit } from "./unit.model";

export interface Appartenir {
    id_appartenir?: number | null;
    id_unit?: number | null;
    id_keyword?: number | null;
  }