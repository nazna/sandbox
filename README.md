# sandbox

> For experiment or practice or enjoy

## How to merge another git repository

```shellscript
git remote add -f <remote-name> <git-repository-url>
git merge -s ours --no-commit --allow-unrelated-histories <remote-name>/main
git read-tree --prefix=<subdir-name> -u <remote-name>/main
git commit -m "chore: merge <username>/<repository-name>"
git push
```
