import {
  getStackOverflowAccount,
  getStackOverflowAnswers,
  getStackOverflowQuestions,
} from '@/apis/stackoverflow/stackoverflow';
import { PageSection } from '@/components/PageSection/PageSection';
import { StackOverflowFlair } from '@/components/StackOverflowFlair/StackOverflowFlair';
import { getYearsAndMonthsSinceUnix } from '@/utils/getYearsAndMonthsSinceUnix/getYearsAndMonthsSinceUnix';
import { Suspense } from 'react';

export default async function Home() {
  const accountData = getStackOverflowAccount();
  const questionsData = getStackOverflowQuestions();
  const answersData = getStackOverflowAnswers();

  const [account, questions, answer] = await Promise.all([
    accountData,
    questionsData,
    answersData,
  ]);

  console.log({ account, questions, answer });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <PageSection title="Stack Overflow">
        <StackOverflowFlair />
        <Suspense fallback={<div>Loading...</div>}>
          {account ? (
            <>
              <p>
                I&apos;ve been an active member of StackOverflow for{' '}
                <strong>
                  {getYearsAndMonthsSinceUnix(account.creation_date)}
                </strong>
              </p>
              <p>{account.reputation}</p>
              <p>{JSON.stringify(account.badge_counts)}</p>
              <p>{account.link}</p>
              <p>{account.reputation}</p>
              <p>{account.reputation_change_day}</p>
              <p>{account.reputation_change_month}</p>
              <p>{account.reputation_change_quarter}</p>
              <p>{account.reputation_change_week}</p>
              <p>{account.reputation_change_year}</p>
              <p>{account.last_modified_date}</p>
            </>
          ) : (
            <p>Account Details Not Found</p>
          )}
          <p>Questions: {JSON.stringify(questions, null, 4)}</p>
          <p>Answers: {JSON.stringify(answer, null, 4)}</p>
        </Suspense>
      </PageSection>

      <PageSection title="GitHub"></PageSection>
    </main>
  );
}
