import Link from 'next/link';

export default function Layout(props) {
  const { children } = props;
  const { title } = children.props.frontmatter || {};
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-fuchsia-100 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a>🏡</a>
          </Link>
          <span className='mx-auto'>{title || "Introduction to Next.Js"}</span>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-fuchsia-100 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2022 Byju's - The Learning App
        </div>
      </footer>
    </div>
  );
}
