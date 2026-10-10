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

const ALL_SCENARIOS: Scenario[] = [
  SCENARIO_FAIRE_CONNAISSANCE,
  SCENARIO_AU_CAFE,
  SCENARIO_COURSES,
  SCENARIO_TRANSPORT,
  SCENARIO_LOGEMENT,
  SCENARIO_SANTE,
];

const ALL_GOALS: LearningGoal[] = [
  ...FC_GOALS,
  ...CAFE_GOALS,
  ...COURSES_GOALS,
  ...TRANSPORT_GOALS,
  ...LOGEMENT_GOALS,
  ...SANTE_GOALS,
];

const ALL_TASKS: Task[] = [
  ...FC_TASKS,
  ...CAFE_TASKS,
  ...COURSES_TASKS,
  ...TRANSPORT_TASKS,
  ...LOGEMENT_TASKS,
  ...SANTE_TASKS,
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

export { ALL_GOALS as GOALS };
