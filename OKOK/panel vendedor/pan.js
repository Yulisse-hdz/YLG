        document.querySelectorAll('aside a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('aside a').forEach(l => {
                    l.classList.remove('sidebar-item-active');
                    l.classList.add('text-on-tertiary-container', 'hover:bg-surface-container');
                });
                link.classList.add('sidebar-item-active');
                link.classList.remove('text-on-tertiary-container', 'hover:bg-surface-container');
            });
        });