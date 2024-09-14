CREATE TABLE user(
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
    desc TEXT,
    img BYTEA,
    userId INT REFERENCES user(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    desc TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userId INT NOT NULL,
    postId INT REFERENCES post(id)
);

CREATE TABLE stories(
    id SERIAL PRIMARY KEY,
    img BYTEA,
    userId INT NOT NULL,
    storyId REFERENCES user(id)
);


CREATE TABLE relationship(
    id SERIAL PRIMARY KEY,
    followerId INT NOT NULL REFERENCES user(id),
    followed_id INT NOT NULL REFERENCES user(id)
);


CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    userId INT,
    postId INT,
    likeUserId user(id),
    likePostId post(id)
);