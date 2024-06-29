import classNames from "classnames";
import BLOG from "~/blog.config";

type Props = { fullWidth?: boolean };

export const Footer: React.VFC<Props> = ({ fullWidth }) => {
  return (
    <div
      className={classNames(
        "mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all",
        {
          "px-4 md:px-24": fullWidth,
          "max-w-2xl px-4": !fullWidth,
        },
      )}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex flex-wrap justify-between align-baseline">
          <p>© {BLOG.author}</p>
          <a
            href={BLOG.repository}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-black dark:hover:text-gray-100"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
