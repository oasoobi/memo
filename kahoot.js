
  // すでにオーバーレイがあるかチェック
  if (document.getElementById('bookmarkletOverlay')) {
    return; // 既に存在している場合は何もしない
  }

  // オーバーレイ要素を作成
  const overlay = document.createElement('div');
  overlay.id = 'bookmarkletOverlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // 半透明の黒
  overlay.style.zIndex = '10000'; // 最前面に配置
  overlay.style.display = 'block';

  // オーバーレイをクリックすると削除
  overlay.addEventListener('click', function() {
    document.body.removeChild(overlay);
  });

  // Reactが管理していないbodyの直下に追加
  document.body.appendChild(overlay);
