import type { Scenario, LearningGoal, Task } from "../types";
import {
  SCENARIO_FAIRE_CONNAISSANCE,
  GOALS as FC_GOALS,
  TASKS as FC_TASKS,
} from "./a1-faire-connaissance";
import { SCENARIO_AU_CAFE, CAFE_GOALS, CAFE_TASKS } from "./a1-au-cafe";
import { SCENARIO_COURSES, COURSES_GOALS, COURSES_TASKS } from "./a1-courses";
import {
  SCENARIO_TRANSPORT,
  TRANSPORT_GOALS,
  TRANSPORT_TASKS,
} from "./a1-transport";
import {
  SCENARIO_LOGEMENT,
  LOGEMENT_GOALS,
  LOGEMENT_TASKS,
} from "./a1-logement";
import { SCENARIO_SANTE, SANTE_GOALS, SANTE_TASKS } from "./a1-sante";
import {
  SCENARIO_RESTAURANT,
  RESTAURANT_GOALS,
  RESTAURANT_TASKS,
} from "./a2-restaurant";
import { SCENARIO_HOTEL, HOTEL_GOALS, HOTEL_TASKS } from "./a2-hotel";
import { SCENARIO_PHONE, PHONE_GOALS, PHONE_TASKS } from "./a2-telephone";
import { SCENARIO_RDV, RDV_GOALS, RDV_TASKS } from "./a2-rdv";
import { SCENARIO_TRAVAIL, TRAVAIL_GOALS, TRAVAIL_TASKS } from "./b1-travail";
import { SCENARIO_SERVICE, SERVICE_GOALS, SERVICE_TASKS } from "./b1-service";
import { SCENARIO_OPINION, OPINION_GOALS, OPINION_TASKS } from "./b2-opinion";
import {
  SCENARIO_ARGUMENT,
  ARGUMENT_GOALS,
  ARGUMENT_TASKS,
} from "./c1-argument";

const ALL_SCENARIOS: Scenario[] = [
  SCENARIO_FAIRE_CONNAISSANCE,
  SCENARIO_AU_CAFE,
  SCENARIO_COURSES,
  SCENARIO_TRANSPORT,
  SCENARIO_LOGEMENT,
  SCENARIO_SANTE,
  SCENARIO_RESTAURANT,
  SCENARIO_HOTEL,
  SCENARIO_PHONE,
  SCENARIO_RDV,
  SCENARIO_TRAVAIL,
  SCENARIO_SERVICE,
  SCENARIO_OPINION,
  SCENARIO_ARGUMENT,
];

const ALL_GOALS: LearningGoal[] = [
  ...FC_GOALS,
  ...CAFE_GOALS,
  ...COURSES_GOALS,
  ...TRANSPORT_GOALS,
  ...LOGEMENT_GOALS,
  ...SANTE_GOALS,
  ...RESTAURANT_GOALS,
  ...HOTEL_GOALS,
  ...PHONE_GOALS,
  ...RDV_GOALS,
  ...TRAVAIL_GOALS,
  ...SERVICE_GOALS,
  ...OPINION_GOALS,
  ...ARGUMENT_GOALS,
];

const ALL_TASKS: Task[] = [
  ...FC_TASKS,
  ...CAFE_TASKS,
  ...COURSES_TASKS,
  ...TRANSPORT_TASKS,
  ...LOGEMENT_TASKS,
  ...SANTE_TASKS,
  ...RESTAURANT_TASKS,
  ...HOTEL_TASKS,
  ...PHONE_TASKS,
  ...RDV_TASKS,
  ...TRAVAIL_TASKS,
  ...SERVICE_TASKS,
  ...OPINION_TASKS,
  ...ARGUMENT_TASKS,
];

export function getPublishedScenarios(): Scenario[] {
  return ALL_SCENARIOS.filter((s) => s.status === "published");
}

export function getScenarioById(id: string): Scenario | undefined {
  return getPublishedScenarios().find((s) => s.id === id);
}

export function getAllGoals(): LearningGoal[] {
  return ALL_GOALS;
}

export function getGoalById(id: string): LearningGoal | undefined {
  return ALL_GOALS.find((g) => g.id === id);
}

export function getGoalsForScenario(scenarioId: string): LearningGoal[] {
  return ALL_GOALS.filter((g) => g.scenarioId === scenarioId);
}

export function getTasksForGoal(goalId: string): Task[] {
  return ALL_TASKS.filter((t) => t.goalId === goalId);
}

export function getAllGoalIds(): string[] {
  return ALL_GOALS.map((g) => g.id);
}

export function validateCurriculumIntegrity(): string[] {
  const ids = new Set(getAllGoalIds());
  const issues: string[] = [];
  for (const g of ALL_GOALS) {
    for (const p of g.prerequisites) {
      if (!ids.has(p)) issues.push(`${g.id} missing prereq ${p}`);
    }
    if (!ALL_SCENARIOS.some((s) => s.id === g.scenarioId)) {
      issues.push(`${g.id} unknown scenario ${g.scenarioId}`);
    }
  }
  for (const t of ALL_TASKS) {
    if (!ids.has(t.goalId)) issues.push(`task ${t.id} unknown goal ${t.goalId}`);
  }
  return issues;
}

export { ALL_GOALS as GOALS };
