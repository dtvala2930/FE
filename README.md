# FE

## dev

### Before run script

#### Step 1: Update .env file

```
VITE_API_URL=
VITE_API_PATH=

VITE_TIME_INTERVAL=

```

#### Step 2: Install package

```
yarn

```

### Step 2

```
yarn dev
```

## docker compose up

### Before run script

#### Step 1: Edit file .env with variables

```
VITE_PORT=

VITE_API_URL=
VITE_API_PATH=

VITE_TIME_INTERVAL=

```

#### Step 2: Run script

```
docker compose up
```

## deploy source

### Follow these steps to deploy

#### Step 1: install firebase cli

```
yarn global add firebase-tools
```

#### Step 2: firebase login

```
firebase login
```

#### Step 3:

```
yarn deploy:dev
```
