import type { Course, Category } from "@/types/quiz";
import { COURSES } from "@/data/courses";

export function getAllCourses(): Course[] {
  return COURSES;
}

export function getCourseById(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id);
}

export function getCategoryById(courseId: string, categoryId: string): Category | undefined {
  return getCourseById(courseId)?.categories.find((c) => c.id === categoryId);
}
