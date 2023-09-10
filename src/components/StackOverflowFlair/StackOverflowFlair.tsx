import Image from 'next/image';
import Link from 'next/link';

export function StackOverflowFlair() {
  return (
    <Link
      href="https://stackoverflow.com/users/2111515/barry-michael-doyle"
      className="inline-block"
    >
      <Image
        src="https://stackoverflow.com/users/flair/2111515.png?theme=dark"
        width={208}
        height={58}
        alt="profile for Barry Michael Doyle at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
        title="profile for Barry Michael Doyle at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
      />
    </Link>
  );
}
