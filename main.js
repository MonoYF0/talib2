    function togglePack(card) {
            const isShowing = card.classList.contains('show-img');
            document.querySelectorAll('.pack-card').forEach(p => p.classList.remove('show-img'));
            if (!isShowing) card.classList.add('show-img');
        }