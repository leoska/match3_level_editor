export default function deepFreeze<T extends object>(obj: T): T {
  Object.keys(obj).forEach((prop) => {
    if (
      typeof obj[prop as keyof T] === "object" &&
      !Object.isFrozen(obj[prop as keyof T])
    ) {
      deepFreeze(obj[prop as keyof object]);
    }
  });
  return Object.freeze(obj) as T;
}
