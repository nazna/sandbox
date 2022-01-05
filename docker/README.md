# docker

## database

不要なイメージやコンテナを削除する


```shell
docker system prune -a
```

イメージのビルド

```shell
docker image build -t example-monorepo-app/database:latest ./docker/database
docker image ls
```

コンテナの実行

```shell
docker container run --name database --publish 3306:3306 --detach --rm example-monorepo-app/database:latest
docker container ls
```

データベースに接続する

```shell
mysql --host=127.0.0.1 --user=root --password
```
