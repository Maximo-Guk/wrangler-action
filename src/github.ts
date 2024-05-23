import { context, getOctokit } from "@actions/github";
import { env } from "process";

const githubBranch = env.GITHUB_HEAD_REF || env.GITHUB_REF_NAME;

type Octokit = ReturnType<typeof getOctokit>;

const { pull_request } = context.payload;

export const createGitHubComment = async (
	gitHubToken: string,
) => {
	if (pull_request?.number && env) {
        const octokit = getOctokit(gitHubToken);

		await octokit.rest.issues.createComment({
			...context.repo,
			issue_number: pull_request.number,
			body: "Your workers deployment has succeeded.",
		});
	}
};
