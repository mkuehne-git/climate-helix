import { registerSW } from 'virtual:pwa-register';

let updateServiceWorker: (() => Promise<void>) | undefined;

function createPwaUpdateDialog(): void {
    const existingDialog = document.getElementById('pwa-update-dialog');
    if (existingDialog) {
        return;
    }

    const dialog = document.createElement('div');
    dialog.id = 'pwa-update-dialog';
    dialog.className = 'pwa-update-dialog hidden';

    const content = document.createElement('div');
    content.className = 'pwa-update-content';

    const title = document.createElement('h2');
    title.textContent = 'Update available';

    const message = document.createElement('p');
    message.textContent = 'A new version of Climate Helix is ready. Reload to apply the update?';

    const actions = document.createElement('div');
    actions.className = 'pwa-update-actions';

    const reloadButton = document.createElement('button');
    reloadButton.type = 'button';
    reloadButton.textContent = 'Reload';
    reloadButton.className = 'pwa-update-button primary';
    reloadButton.addEventListener('click', async () => {
        if (updateServiceWorker) {
            await updateServiceWorker();
        }
    });

    const dismissButton = document.createElement('button');
    dismissButton.type = 'button';
    dismissButton.textContent = 'Later';
    dismissButton.className = 'pwa-update-button secondary';
    dismissButton.addEventListener('click', () => {
        dialog.classList.add('hidden');
    });

    actions.append(reloadButton, dismissButton);
    content.append(title, message, actions);
    dialog.appendChild(content);
    document.body.appendChild(dialog);
}

export function showPwaUpdatePrompt(): void {
    createPwaUpdateDialog();
    const dialog = document.querySelector('#pwa-update-dialog');
    dialog?.classList.remove('hidden');
}

export function initPwaUpdate(): void {
    createPwaUpdateDialog();
    updateServiceWorker = registerSW({
        immediate: true,
        onNeedRefresh() {
            showPwaUpdatePrompt();
        },
        onOfflineReady() {
            console.info('Climate Helix is ready for offline use.');
        }
    });
}

export async function checkForPwaUpdates(): Promise<boolean> {
    if (!('serviceWorker' in navigator)) {
        console.info('Service workers are not supported in this browser.');
        return false;
    }

    const registrations = await navigator.serviceWorker.getRegistrations();
    if (registrations.length === 0) {
        console.info('No service worker is currently registered.');
        return false;
    }

    await Promise.all(registrations.map((registration) => registration.update()));
    return true;
}
