import { StackOverflowData, StackOverflowUser } from './types';

export async function getStackOverflowAccount(): Promise<
  StackOverflowUser | undefined
> {
  const response = await fetch(
    'https://api.stackexchange.com/2.3/users/2111515?order=desc&sort=reputation&site=stackoverflow',
  );
  const data = (await response.json()) as
    | StackOverflowData<StackOverflowUser>
    | undefined;
  return data?.items[0];
}

export async function getStackOverflowQuestions() {
  const response = await fetch(
    'https://api.stackexchange.com/2.3/users/2111515/questions?order=desc&sort=activity&site=stackoverflow',
  );
  return response.json();
}

export async function getStackOverflowAnswers() {
  const response = await fetch(
    'https://api.stackexchange.com/2.3/users/2111515/answers?order=desc&sort=activity&site=stackoverflow',
  );
  return response.json();
}
