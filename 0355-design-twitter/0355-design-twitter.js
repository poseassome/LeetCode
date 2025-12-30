
var Twitter = function() {
    this.tweets = [];
    this.following = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.tweets.push([userId, tweetId]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const followedUsers = this.following.get(userId) || new Set();
    followedUsers.add(userId);

    // Filter tweets by users the current user follows and themselves
    const newsFeed = this.tweets
        .filter(([uId, _]) => followedUsers.has(uId))
        .slice(-10) // Get the last 10 tweets
        .reverse(); // Reverse to get most recent first

    return newsFeed.map(([_, tweetId]) => tweetId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.following.has(followerId)) {
        this.following.set(followerId, new Set());
    }
    this.following.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.following.has(followerId)) {
        this.following.get(followerId).delete(followeeId);
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */