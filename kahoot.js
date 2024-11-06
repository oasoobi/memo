const url = prompt("動画リンクを入力");

function getYTVideoID(url) {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null; // videoIDが見つかれば返す、なければnull
}

const videoID = getYTVideoID(url);

if (videoID !== null) {
    alert(videoID);
    const overlay = document.createElement('div');
    overlay.id = 'bookmarkletOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // 半透明の黒
    overlay.style.zIndex = '10000'; // 最前面に配置
    overlay.style.display = 'block';

    document.body.appendChild(overlay);

    const player = document.createElement("iframe");
    player.width = "560px";
    player.height = "315px";
    player.style.display = "flex";
    player.style.alignItems = "center";
    player.style.justifyContent = "center";
    player.src = `https://www.youtube.com/embed/${videoID}`;
    player.frameBorder = "0";
    player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    player.allowFullscreen = true;

    overlay.appendChild(player);

} else {
    alert("urlが無効です。")
}
