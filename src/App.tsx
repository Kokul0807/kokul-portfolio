import { useState, useEffect } from 'react';
import RecruiterToolbar from './components/RecruiterToolbar';
import ResumeModal from './components/ResumeModal';
import PhotoUploaderModal from './components/PhotoUploaderModal';
import CodeSandboxModal from './components/CodeSandboxModal';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [currentPhoto, setCurrentPhoto] = useState<string>(PERSONAL_INFO.defaultPortrait);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [isSandboxModalOpen, setIsSandboxModalOpen] = useState<boolean>(false);

  // Initialize photo from localStorage if custom was previously uploaded
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('user_portfolio_photo_v3');
      if (savedPhoto) {
        setCurrentPhoto(savedPhoto);
      }
    } catch {
      // Ignore storage restrictions
    }
  }, []);

  // Synchronize photo across the DOM (.portrait-img and .ab-img)
  useEffect(() => {
    const portraitImages = document.querySelectorAll<HTMLImageElement>(
      '.portrait-img, .ab-img, .wk-detail-media img, .ab-view-media img'
    );
    portraitImages.forEach((img) => {
      // Only replace candidate portrait images, not project screenshots
      if (
        img.src.includes('hero-portrait') ||
        img.src.includes('portrait') ||
        img.classList.contains('portrait-img')
      ) {
        img.src = currentPhoto;
      }
    });
  }, [currentPhoto]);

  // Hook global click triggers in the HTML
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // If user clicks the hero portrait or notif card, offer photo switcher
      if (target.closest('.portrait-frame') || target.closest('.notif-avatar')) {
        // Optional quick trigger
      }

      // If user clicks theme button, we can show a subtle confirmation or toggle
      const themeBtn = target.closest('.theme-btn');
      if (themeBtn) {
        document.body.classList.toggle('light-accent-mode');
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const handlePhotoChange = (newPhotoUrl: string) => {
    setCurrentPhoto(newPhotoUrl);
    try {
      localStorage.setItem('user_portfolio_photo_v3', newPhotoUrl);
    } catch {
      // Ignore storage restrictions
    }
  };

  return (
    <>
      {/* Floating Recruiter Action Hub */}
      <RecruiterToolbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenPhoto={() => setIsPhotoModalOpen(true)}
        onOpenSandbox={() => setIsSandboxModalOpen(true)}
      />

      {/* Recruiter Verification Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Profile Photo Uploader / Switcher Modal */}
      <PhotoUploaderModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={currentPhoto}
        onPhotoChange={handlePhotoChange}
      />

      {/* Interactive Code Sandbox Modal */}
      <CodeSandboxModal
        isOpen={isSandboxModalOpen}
        onClose={() => setIsSandboxModalOpen(false)}
      />
    </>
  );
}
