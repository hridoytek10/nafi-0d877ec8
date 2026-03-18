export type CreatedRepo = {
  url: string
  name: string
}

export async function createRepoForBuild(buildId: string): Promise<CreatedRepo> {
  // In a real implementation, call the GitHub REST API here with a personal access token.
  // For now we return a placeholder that matches the expected shape.
  return {
    url: `https://github.com/example/${buildId}`,
    name: buildId,
  }
}

export async function pushProjectToRepo(_buildDir: string, repo: CreatedRepo): Promise<void> {
  // In a real implementation, initialize a git repo, commit, and push to GitHub.
  // This is intentionally left as a stub so the generator flow can be wired
  // without requiring credentials during development.
  void repo
}

