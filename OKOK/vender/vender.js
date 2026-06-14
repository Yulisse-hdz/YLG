        // Sync Editor inputs with Preview
        const nameInput = document.getElementById('shop-name-input');
        const bioInput = document.getElementById('shop-bio-input');
        const previewName = document.getElementById('preview-name');
        const previewBio = document.getElementById('preview-bio');

        nameInput.addEventListener('input', (e) => {
            previewName.textContent = e.target.value || 'Tu Marca';
        });

        bioInput.addEventListener('input', (e) => {
            previewBio.textContent = e.target.value || 'Describe la esencia de tu boutique...';
        });

        // Brand Color Update Logic
        function updateBrandColor(color) {
            document.getElementById('current-color-hex').textContent = color.toUpperCase();
            
            // Apply color to interactive preview elements
            const cta = document.getElementById('preview-cta');
            const price1 = document.getElementById('preview-price-1');
            const price2 = document.getElementById('preview-price-2');
            const previewWindow = document.querySelector('.preview-pane');

            cta.style.backgroundColor = color;
            price1.style.color = color;
            price2.style.color = color;
            previewWindow.style.borderColor = color;

            // Success feedback on dot selection
            console.log(`Brand color updated to: ${color}`);
        }

        // Form submission feedback
        const editorForm = document.getElementById('shop-editor-form');
        const saveBtn = document.getElementById('save-btn');

        editorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const originalContent = saveBtn.innerHTML;
            
            saveBtn.innerHTML = `
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sincronizando...</span>
            `;
            saveBtn.disabled = true;

            setTimeout(() => {
                saveBtn.innerHTML = `
                    <span class="material-symbols-outlined">check_circle</span>
                    <span>Actualizado con éxito</span>
                `;
                saveBtn.classList.remove('bg-black');
                saveBtn.classList.add('bg-emerald-600');

                setTimeout(() => {
                    saveBtn.innerHTML = originalContent;
                    saveBtn.classList.remove('bg-emerald-600');
                    saveBtn.classList.add('bg-black');
                    saveBtn.disabled = false;
                }, 2000);
            }, 1500);
        });

        // Initialize with default color if needed
        updateBrandColor('#000000');