import Image from "next/image";
import Link from "next/link";

export default function Header({ photo }: { photo?: string | undefined }) {
    return (
        <header className="flex justify-center items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
            <Link href="/" className="flex space-x-2">
                <Image
                    alt="header text"
                    src="/imageIcon.png"
                    className="sm:w-12 sm:h-12 w-7 h-7"
                    width={25}
                    height={25}
                />
                <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
                    restorePhotos.io
                </h1>
            </Link>
            {photo &&
                <Image
                    alt="Profile picture"
                    src={photo}
                    className="w-10 rounded-full"
                    width={32}
                    height={28}
                />}
        </header>
    );
}
