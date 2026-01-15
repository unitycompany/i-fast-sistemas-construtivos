import type { NextConfig } from "next";

const githubPagesBasePath = (() => {
	// Ex: "/i-fast-sistemas-construtivos"
	const raw = process.env.NEXT_PUBLIC_BASE_PATH || "";
	if (!raw) return "";
	return raw.startsWith("/") ? raw : `/${raw}`;
})();

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	...(isGitHubPages
		? {
				basePath: githubPagesBasePath,
				assetPrefix: githubPagesBasePath,
			}
		: {}),
};

export default nextConfig;
