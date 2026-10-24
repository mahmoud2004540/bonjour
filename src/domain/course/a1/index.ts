import type { CourseUnit } from "../types";
import { A1_U01 } from "./u01-bonjour";
import { A1_U02 } from "./u02-identite";
import { A1_U03 } from "./u03-famille";
import { A1_U04 } from "./u04-quotidien";
import { A1_U05 } from "./u05-ville";
import { A1_U06 } from "./u06-restaurant";
import { A1_U07 } from "./u07-courses";
import { A1_U08 } from "./u08-transports";
import { A1_U09 } from "./u09-logement";
import { A1_U10 } from "./u10-sante";
import { A1_U11 } from "./u11-loisirs";
import { A1_U12 } from "./u12-projets";
import { A1_U13 } from "./u13-bilan";

/** A1 syllabus, in teaching order. */
export const A1_COURSE: CourseUnit[] = [
  A1_U01,
  A1_U02,
  A1_U03,
  A1_U04,
  A1_U05,
  A1_U06,
  A1_U07,
  A1_U08,
  A1_U09,
  A1_U10,
  A1_U11,
  A1_U12,
  A1_U13,
];
