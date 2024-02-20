document.addEventListener('DOMContentLoaded', function() {
    // Toggle active class on navigation links
    const navLinks = document.querySelectorAll('.nav-middle a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Handle posting new content
    const postInput = document.querySelector('.post-top input');
    const createPostBtn = document.querySelector('.post-top i.fa-video');
    createPostBtn.addEventListener('click', function() {
        const content = postInput.value.trim();
        if (content) {
            createPost(content);
            postInput.value = '';
        } else {
            alert('Please enter some content.');
        }
    });

    function createPost(content) {
        const newPost = document.createElement('div');
        newPost.classList.add('post');

        const dp = document.createElement('div');
        dp.classList.add('dp');
        dp.innerHTML = '<img src="girl.jpg" alt="">';

        const postInfo = document.createElement('div');
        postInfo.classList.add('post-info');
        postInfo.innerHTML = '<p class="name">Aashish Panthi</p><span class="time">Just now</span>';

        const ellipsisIcon = document.createElement('i');
        ellipsisIcon.classList.add('fas', 'fa-ellipsis-h');
        ellipsisIcon.addEventListener('click', function() {
            // Add your logic here to show options like delete or edit post
            alert('Option clicked: Edit / Delete post');
        });

        const postTop = document.createElement('div');
        postTop.classList.add('post-top');
        postTop.appendChild(dp);
        postTop.appendChild(postInfo);
        postTop.appendChild(ellipsisIcon);

        const postContent = document.createElement('div');
        postContent.classList.add('post-content');
        postContent.textContent = content;

        const likeBtn = createActionButton('far fa-thumbs-up', 'Like', likePost);
        const commentBtn = createActionButton('far fa-comment', 'Comment', commentOnPost);
        const shareBtn = createActionButton('fa fa-share', 'Share', sharePost);

        const postBottom = document.createElement('div');
        postBottom.classList.add('post-bottom');
        postBottom.appendChild(likeBtn);
        postBottom.appendChild(commentBtn);
        postBottom.appendChild(shareBtn);

        newPost.appendChild(postTop);
        newPost.appendChild(postContent);
        newPost.appendChild(postBottom);

        document.querySelector('.middle-panel').appendChild(newPost);
    }

    function createActionButton(iconClass, text, action) {
        const actionBtn = document.createElement('div');
        actionBtn.classList.add('action');
        actionBtn.innerHTML = `<i class="${iconClass}"></i><span>${text}</span>`;
        actionBtn.addEventListener('click', action);
        return actionBtn;
    }

    function likePost() {
        // Add logic here to handle liking the post
        alert('Post liked');
    }

    function commentOnPost() {
        // Add logic here to handle commenting on the post
        alert('Comment added');
    }

    function sharePost() {
        // Add logic here to handle sharing the post
        alert('Post shared');
    }
});
