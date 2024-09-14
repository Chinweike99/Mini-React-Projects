CREATE TABLE account_user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    email VARCHAR(100),
    name TEXT NOT NULL,
    password VARCHAR(200),
    cover_pic BYTEA,
    profile_pic BYTEA NOT NULL,
    city VARCHAR(100),
    website TEXT
);


CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    descr TEXT,
    img BYTEA,
    userId INT REFERENCES account_user(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    descr TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    commentsUserId INT NOT NULL REFERENCES account_user(id),
    postId INT REFERENCES post(id)
);

CREATE TABLE stories(
    id SERIAL PRIMARY KEY,
    img BYTEA,
    userId INT NOT NULL,
    storyId INT REFERENCES account_user(id)
);


CREATE TABLE relationship(
    id SERIAL PRIMARY KEY,
    followerId INT NOT NULL REFERENCES account_user(id),
    followed_id INT NOT NULL REFERENCES account_user(id)
);


CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    likedUserId INT NOT NULL REFERENCES account_user(id),
    likedPostId INT NOT NULL REFERENCES post(id)
);