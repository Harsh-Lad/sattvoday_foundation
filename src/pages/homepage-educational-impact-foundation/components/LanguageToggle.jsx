import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LanguageToggle = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' }
  ];

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('sattvoday-language');
    if (savedLanguage && languages?.find(lang => lang?.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('sattvoday-language', languageCode);
    setIsOpen(false);
    
    // In a real implementation, this would trigger a global language change
    // For now, we'll just show a brief notification
    const event = new CustomEvent('languageChanged', { 
      detail: { language: languageCode } 
    });
    window.dispatchEvent(event);
  };

  const currentLang = languages?.find(lang => lang?.code === currentLanguage);

  return (
    <div className="fixed top-20 right-4 z-40">
      <div className="relative">
        {/* Language Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-card border border-border rounded-lg px-3 py-2 brand-shadow-sm hover-lift transition-all duration-200"
          aria-label="Change language"
        >
          <span className="text-lg">{currentLang?.flag}</span>
          <span className="text-sm font-medium text-foreground hidden sm:inline">
            {currentLang?.nativeName}
          </span>
          <Icon 
            name={isOpen ? "ChevronUp" : "ChevronDown"} 
            size={16} 
            className="text-muted-foreground" 
          />
        </button>

        {/* Language Dropdown */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg brand-shadow z-20">
              <div className="py-2">
                <div className="px-3 py-2 text-xs font-medium text-muted-foreground border-b border-border">
                  Select Language
                </div>
                {languages?.map((language) => (
                  <button
                    key={language?.code}
                    onClick={() => handleLanguageChange(language?.code)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 text-sm transition-colors duration-150 hover:bg-muted ${
                      currentLanguage === language?.code 
                        ? 'bg-primary/10 text-primary' :'text-popover-foreground'
                    }`}
                  >
                    <span className="text-lg">{language?.flag}</span>
                    <div className="flex-1 text-left">
                      <div className="font-medium">{language?.nativeName}</div>
                      <div className="text-xs text-muted-foreground">{language?.name}</div>
                    </div>
                    {currentLanguage === language?.code && (
                      <Icon name="Check" size={16} className="text-primary" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="border-t border-border px-3 py-2">
                <div className="text-xs text-muted-foreground">
                  More languages coming soon
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Language Change Notification */}
      <div 
        id="language-notification"
        className="fixed top-32 right-4 bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-lg brand-shadow-sm transform translate-x-full opacity-0 transition-all duration-300"
      >
        <div className="flex items-center space-x-2">
          <Icon name="Check" size={16} />
          <span className="text-sm font-medium">Language updated!</span>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;