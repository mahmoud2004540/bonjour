/** Compatibility re-exports — prefer @/domain/lessons/registry */
export type { LessonPhase, LessonUnit } from "./types";
export {
  getUnitById,
  getFirstUnit,
  getAllUnits,
  getNextUnit,
  isUnitComplete,
} from "./registry";
