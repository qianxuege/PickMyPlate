import { useState } from 'react';
import { Heart, Flame, Search, Plus, X, Check } from 'lucide-react';
import { DishCard } from './components/DishCard';
import { FilterChip } from './components/FilterChip';
import { PrimaryButton } from './components/PrimaryButton';

export default function App() {
  const [screen, setScreen] = useState<'welcome' | 'preferences' | 'home' | 'scan' | 'results' | 'search' | 'adjust-preferences' | 'dish-detail' | 'profile' | 'favorites'>('welcome');
  const [tastePrefs, setTastePrefs] = useState<string[]>([]);
  const [dietary, setDietary] = useState<string>('None');
  const [budget, setBudget] = useState<string>('$$');
  const [activeTab, setActiveTab] = useState<'home' | 'favorites' | 'profile'>('home');
  const [activeFilters, setActiveFilters] = useState<string[]>(['$$']);
  const [selectedResultFilters, setSelectedResultFilters] = useState<string[]>(['Spicy']);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [preferenceMode, setPreferenceMode] = useState<string>('Play it Safe');
  const [selectedDish, setSelectedDish] = useState<any>(null);
  const [favoriteDishes, setFavoriteDishes] = useState<any[]>([]);

  const toggleTastePref = (pref: string) => {
    setTastePrefs(prev => 
      prev.includes(pref) 
        ? prev.filter(p => p !== pref)
        : [...prev, pref]
    );
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  if (screen === 'welcome') {
    return (
      <div className="size-full flex items-center justify-center bg-white">
        {/* Mobile wireframe container */}
        <div className="w-[375px] h-[667px] bg-gray-100 border-2 border-gray-400 flex flex-col items-center justify-between px-[32px] py-[64px]">
          
          {/* Top section with branding */}
          <div className="flex flex-col items-center gap-[24px] mt-[80px]">
            {/* App name */}
            <div className="text-center">
              <h1 className="text-[32px] font-bold text-black tracking-tight">
                PickMyPlate
              </h1>
            </div>
            
            {/* Tagline */}
            <p className="text-[18px] text-gray-700 text-center">
              Choose faster. Order smarter.
            </p>
          </div>

          {/* Bottom section with CTA */}
          <div className="w-full">
            <PrimaryButton onClick={() => setScreen('preferences')}>
              Get Started
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'preferences') {
    return (
      <div className="size-full flex items-center justify-center bg-white">
        {/* Mobile wireframe container */}
        <div className="w-[375px] h-[667px] bg-gray-100 border-2 border-gray-400 flex flex-col px-[24px] py-[48px] overflow-y-auto">
          
          {/* Title */}
          <h1 className="text-[24px] font-bold text-black mb-[32px]">
            Tell us what you like
          </h1>

          {/* Taste Preferences Section */}
          <div className="mb-[32px]">
            <h2 className="text-[16px] font-semibold text-black mb-[16px]">
              Taste Preferences
            </h2>
            <div className="flex flex-wrap gap-[8px]">
              {['Spicy', 'Savory', 'Sweet', 'Light'].map((taste) => (
                <button
                  key={taste}
                  onClick={() => toggleTastePref(taste)}
                  className={`px-[16px] py-[8px] border-2 text-[14px] ${
                    tastePrefs.includes(taste)
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-400'
                  }`}
                >
                  {taste}
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Needs Section */}
          <div className="mb-[32px]">
            <h2 className="text-[16px] font-semibold text-black mb-[16px]">
              Dietary Needs
            </h2>
            <div className="flex flex-wrap gap-[8px]">
              {['None', 'Vegetarian', 'Vegan', 'Gluten-Free'].map((diet) => (
                <button
                  key={diet}
                  onClick={() => setDietary(diet)}
                  className={`px-[16px] py-[8px] border-2 text-[14px] ${
                    dietary === diet
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-400'
                  }`}
                >
                  {diet}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Section */}
          <div className="mb-[40px]">
            <h2 className="text-[16px] font-semibold text-black mb-[16px]">
              Budget
            </h2>
            <div className="flex gap-[8px]">
              {['$', '$$', '$$$'].map((price) => (
                <button
                  key={price}
                  onClick={() => toggleFilter(price)}
                  className={`px-[24px] py-[8px] border-2 text-[14px] ${
                    activeFilters.includes(price)
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-400'
                  }`}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>

          {/* Spacer to push button to bottom */}
          <div className="flex-1" />

          {/* Continue Button */}
          <div className="w-full pt-[16px]">
            <PrimaryButton onClick={() => setScreen('home')}>
              Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'scan') {
    return (
      <div className="size-full flex items-center justify-center bg-white">
        {/* Mobile wireframe container */}
        <div className="w-[375px] h-[667px] bg-gray-100 border-2 border-gray-400 flex flex-col">
          
          {/* Top App Bar */}
          <div className="h-[56px] bg-white border-b-2 border-gray-400 flex items-center px-[16px] relative">
            {/* Back Arrow */}
            <button 
              onClick={() => setScreen('home')}
              className="w-[32px] h-[32px] border-2 border-black flex items-center justify-center absolute left-[16px]"
            >
              <span className="text-[18px] font-bold">←</span>
            </button>
            
            {/* Centered Title */}
            <h1 className="text-[16px] font-semibold text-black w-full text-center">
              Scan Menu
            </h1>
          </div>

          {/* Camera Preview Area */}
          <div className="flex-1 bg-gray-300 border-b-2 border-gray-400 flex items-center justify-center m-[16px]">
            <span className="text-[14px] text-gray-600">Camera Preview</span>
          </div>

          {/* Bottom Controls */}
          <div className="flex flex-col items-center py-[40px] gap-[16px]">
            
            {/* Circular Capture Button */}
            <button 
              onClick={() => setScreen('results')}
              className="w-[80px] h-[80px] rounded-full bg-white border-[6px] border-black"
            >
            </button>

            {/* Upload from Gallery Link */}
            <button 
              onClick={() => setScreen('results')}
              className="text-[14px] text-gray-700 underline"
            >
              Upload from gallery
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'results') {
    const dishes = [
      // Recommended for You
      {
        name: 'Spicy Chicken Tacos',
        summary: 'Bold heat with citrus notes and a satisfying crunch.',
        price: '$12',
        spiceLevel: 3,
        section: 'recommended',
      },
      {
        name: 'Thai Curry Bowl',
        summary: 'Aromatic coconut curry with vegetables and rice.',
        price: '$13',
        spiceLevel: 2,
        section: 'recommended',
      },
      {
        name: 'Grilled Salmon',
        summary: 'Light and flaky with lemon butter sauce.',
        price: '$18',
        spiceLevel: 0,
        section: 'recommended',
      },
      // Top Picks
      {
        name: 'Caesar Salad',
        summary: 'Fresh romaine with creamy dressing and parmesan.',
        price: '$9',
        spiceLevel: 0,
        section: 'top',
      },
      {
        name: 'Margherita Pizza',
        summary: 'Classic tomato and mozzarella with fresh basil.',
        price: '$14',
        spiceLevel: 0,
        section: 'top',
      },
      // Other Dishes
      {
        name: 'Beef Burger',
        summary: 'Juicy patty with lettuce, tomato, and special sauce.',
        price: '$16',
        spiceLevel: 0,
        section: 'other',
      },
      {
        name: 'Pad Thai',
        summary: 'Sweet and tangy noodles with peanuts and lime.',
        price: '$14',
        spiceLevel: 1,
        section: 'other',
      },
    ];

    const recommendedDishes = dishes.filter(d => d.section === 'recommended');
    const topPicksDishes = dishes.filter(d => d.section === 'top');
    const otherDishes = dishes.filter(d => d.section === 'other');

    // All available filters
    const allFilters = ['High Protein', 'Vegetarian', 'Under $15', 'Spicy'];
    
    // Toggle filter selection
    const toggleResultFilter = (filter: string) => {
      setSelectedResultFilters(prev =>
        prev.includes(filter)
          ? prev.filter(f => f !== filter)
          : [...prev, filter]
      );
    };
    
    // Separate selected and unselected filters
    const selectedFilters = allFilters.filter(f => selectedResultFilters.includes(f));
    const unselectedFilters = allFilters.filter(f => !selectedResultFilters.includes(f));
    
    // Combine: selected first, then unselected, then "More Filters" at the end
    const orderedFilters = [...selectedFilters, ...unselectedFilters];

    return (
      <div className="size-full flex items-center justify-center bg-white">
        {/* Mobile wireframe container */}
        <div className="w-[375px] h-[667px] bg-gray-100 border-2 border-gray-400 flex flex-col">
          
          {/* Top App Bar - Compact with Icons */}
          <div className="h-[56px] bg-white border-b-2 border-gray-400 flex items-center px-[16px] relative">
            {/* Back Arrow */}
            <button 
              onClick={() => setScreen('home')}
              className="w-[32px] h-[32px] border-2 border-black flex items-center justify-center"
            >
              <span className="text-[18px] font-bold">←</span>
            </button>
            
            {/* Centered Restaurant Name */}
            <h1 className="text-[16px] font-semibold text-black absolute left-1/2 -translate-x-1/2">
              Noodlehead
            </h1>

            {/* Right Side Icons */}
            <div className="ml-auto flex gap-[8px]">
              <button 
                onClick={() => setScreen('search')}
                className="w-[32px] h-[32px] border-2 border-gray-400 flex items-center justify-center"
              >
                <Search className="w-[18px] h-[18px] text-gray-700" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Quick Filter Chips - One Row with Smart Ordering */}
          <div className="bg-white border-b-2 border-gray-400 px-[16px] py-[10px]">
            <div className="flex gap-[8px] overflow-x-auto">
              {/* Render ordered filters */}
              {orderedFilters.map((filter) => (
                <FilterChip
                  key={filter}
                  label={filter}
                  active={selectedResultFilters.includes(filter)}
                  onClick={() => toggleResultFilter(filter)}
                />
              ))}
              
              {/* More Filters - Always at the end, always outlined, with plus icon */}
              <FilterChip
                label="More Filters"
                active={false}
                onClick={() => setScreen('adjust-preferences')}
                icon={<Plus className="w-[14px] h-[14px]" strokeWidth={2} />}
              />
            </div>
          </div>

          {/* Scrollable Dish List with Sections */}
          <div className="flex-1 overflow-y-auto px-[16px] py-[12px]">
            {/* Recommended for You Section */}
            <div className="mb-[16px]">
              <h2 className="text-[12px] font-bold text-gray-700 mb-[8px]">
                Recommended for You
              </h2>
              <div className="space-y-[12px]">
                {recommendedDishes.map((dish, index) => (
                  <DishCard
                    key={index}
                    name={dish.name}
                    summary={dish.summary}
                    price={dish.price}
                    spiceLevel={dish.spiceLevel}
                    onClick={() => {
                      setSelectedDish(dish);
                      setScreen('dish-detail');
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Top Picks Section */}
            <div className="mb-[16px]">
              <h2 className="text-[12px] font-bold text-gray-700 mb-[8px]">
                Top Picks
              </h2>
              <div className="space-y-[12px]">
                {topPicksDishes.map((dish, index) => (
                  <DishCard
                    key={index}
                    name={dish.name}
                    summary={dish.summary}
                    price={dish.price}
                    spiceLevel={dish.spiceLevel}
                    onClick={() => {
                      setSelectedDish(dish);
                      setScreen('dish-detail');
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Other Dishes Section */}
            <div className="mb-[16px]">
              <h2 className="text-[12px] font-bold text-gray-700 mb-[8px]">
                Other Dishes
              </h2>
              <div className="space-y-[12px]">
                {otherDishes.map((dish, index) => (
                  <DishCard
                    key={index}
                    name={dish.name}
                    summary={dish.summary}
                    price={dish.price}
                    spiceLevel={dish.spiceLevel}
                    onClick={() => {
                      setSelectedDish(dish);
                      setScreen('dish-detail');
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="h-[64px] bg-white border-t-2 border-gray-400 flex items-center justify-around">
            <button 
              onClick={() => setActiveTab('home')}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'home' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'home' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Home
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('favorites');
                setScreen('favorites');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'favorites' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'favorites' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Favorites
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('profile');
                setScreen('profile');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'profile' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'profile' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Profile
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'home') {
    return (
      <div className="size-full flex items-center justify-center bg-white">
        {/* Mobile wireframe container */}
        <div className="w-[375px] h-[667px] bg-gray-100 border-2 border-gray-400 flex flex-col">
          
          {/* Main content area */}
          <div className="flex-1 flex flex-col px-[24px] py-[32px]">
            
            {/* Greeting */}
            <h1 className="text-[20px] font-bold text-black mb-[40px]">
              What are we eating today?
            </h1>

            {/* Scan Menu Button - centered */}
            <div className="flex-1 flex items-center justify-center">
              <PrimaryButton onClick={() => setScreen('scan')}>
                Scan a Menu
              </PrimaryButton>
            </div>

            {/* Recent Scans Section */}
            <div className="mt-[40px]">
              <h2 className="text-[14px] font-semibold text-black mb-[16px]">
                Recent Scans
              </h2>
              <div className="space-y-[8px]">
                {/* Placeholder list items */}
                <div className="h-[56px] bg-white border-2 border-gray-400 flex items-center px-[16px]">
                  <span className="text-[14px] text-gray-700">Restaurant Name - 2 days ago</span>
                </div>
                <div className="h-[56px] bg-white border-2 border-gray-400 flex items-center px-[16px]">
                  <span className="text-[14px] text-gray-700">Restaurant Name - 5 days ago</span>
                </div>
                <div className="h-[56px] bg-white border-2 border-gray-400 flex items-center px-[16px]">
                  <span className="text-[14px] text-gray-700">Restaurant Name - 1 week ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="h-[64px] bg-white border-t-2 border-gray-400 flex items-center justify-around">
            <button 
              onClick={() => setActiveTab('home')}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'home' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'home' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Home
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('favorites');
                setScreen('favorites');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'favorites' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'favorites' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Favorites
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('profile');
                setScreen('profile');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'profile' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'profile' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Profile
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'search') {
    // All dishes data (same as results screen)
    const dishes = [
      {
        name: 'Spicy Chicken Tacos',
        summary: 'Bold heat with citrus notes and a satisfying crunch.',
        price: '$12',
        spiceLevel: 3,
        section: 'recommended',
      },
      {
        name: 'Thai Curry Bowl',
        summary: 'Aromatic coconut curry with vegetables and rice.',
        price: '$13',
        spiceLevel: 2,
        section: 'recommended',
      },
      {
        name: 'Grilled Salmon',
        summary: 'Light and flaky with lemon butter sauce.',
        price: '$18',
        spiceLevel: 0,
        section: 'recommended',
      },
      {
        name: 'Caesar Salad',
        summary: 'Fresh romaine with creamy dressing and parmesan.',
        price: '$9',
        spiceLevel: 0,
        section: 'top',
      },
      {
        name: 'Margherita Pizza',
        summary: 'Classic tomato and mozzarella with fresh basil.',
        price: '$14',
        spiceLevel: 0,
        section: 'top',
      },
      {
        name: 'Beef Burger',
        summary: 'Juicy patty with lettuce, tomato, and special sauce.',
        price: '$16',
        spiceLevel: 0,
        section: 'other',
      },
      {
        name: 'Pad Thai',
        summary: 'Sweet and tangy noodles with peanuts and lime.',
        price: '$14',
        spiceLevel: 1,
        section: 'other',
      },
    ];

    // Filter dishes based on search query
    const filteredDishes = searchQuery
      ? dishes.filter(dish =>
          dish.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

    const recentSearches = ['Tacos', 'Salmon', 'Pizza', 'Curry'];

    return (
      <div className="size-full flex items-center justify-center bg-white">
        {/* Mobile wireframe container */}
        <div className="w-[375px] h-[667px] bg-gray-100 border-2 border-gray-400 flex flex-col">
          
          {/* Search-Focused Header */}
          <div className="h-[56px] bg-white border-b-2 border-gray-400 flex items-center px-[16px] gap-[8px]">
            {/* Back Arrow */}
            <button 
              onClick={() => {
                setSearchQuery('');
                setScreen('results');
              }}
              className="w-[32px] h-[32px] border-2 border-black flex items-center justify-center shrink-0"
            >
              <span className="text-[18px] font-bold">←</span>
            </button>
            
            {/* Search Input Field */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes..."
                autoFocus
                className="w-full h-[40px] px-[12px] pr-[36px] border-2 border-gray-400 bg-gray-100 text-[14px] text-black placeholder:text-gray-600"
              />
              
              {/* Clear (X) Icon inside search field */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] flex items-center justify-center"
                >
                  <X className="w-[16px] h-[16px] text-gray-700" strokeWidth={2} />
                </button>
              )}
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-[16px] py-[12px]">
            
            {/* Show Recent Searches when no search query */}
            {!searchQuery && (
              <div className="mb-[20px]">
                <h2 className="text-[12px] font-bold text-gray-700 mb-[12px]">
                  Recent Searches
                </h2>
                <div className="space-y-[8px]">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(search)}
                      className="w-full h-[44px] bg-white border-2 border-gray-400 flex items-center px-[16px] text-left"
                    >
                      <span className="text-[14px] text-gray-700">{search}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Show Filtered Results when search query exists */}
            {searchQuery && filteredDishes.length > 0 && (
              <div className="mb-[16px]">
                <h2 className="text-[12px] font-bold text-gray-700 mb-[8px]">
                  Results ({filteredDishes.length})
                </h2>
                <div className="space-y-[12px]">
                  {filteredDishes.map((dish, index) => (
                    <DishCard
                      key={index}
                      name={dish.name}
                      summary={dish.summary}
                      price={dish.price}
                      spiceLevel={dish.spiceLevel}
                      onClick={() => {
                        setSelectedDish(dish);
                        setScreen('dish-detail');
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Show No Results message */}
            {searchQuery && filteredDishes.length === 0 && (
              <div className="text-center py-[40px]">
                <p className="text-[14px] text-gray-600">
                  No dishes found for "{searchQuery}"
                </p>
              </div>
            )}
          </div>

          {/* Bottom Navigation Bar */}
          <div className="h-[64px] bg-white border-t-2 border-gray-400 flex items-center justify-around">
            <button 
              onClick={() => setActiveTab('home')}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'home' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'home' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Home
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('favorites');
                setScreen('favorites');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'favorites' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'favorites' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Favorites
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('profile');
                setScreen('profile');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'profile' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'profile' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Profile
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'adjust-preferences') {
    return (
      <div className="size-full flex items-center justify-center bg-white">
        {/* Mobile wireframe container */}
        <div className="w-[375px] h-[667px] bg-gray-100 border-2 border-gray-400 flex flex-col">
          
          {/* Top App Bar */}
          <div className="h-[56px] bg-white border-b-2 border-gray-400 flex items-center px-[16px] relative">
            {/* Back Arrow */}
            <button 
              onClick={() => setScreen('results')}
              className="w-[32px] h-[32px] border-2 border-black flex items-center justify-center absolute left-[16px]"
            >
              <span className="text-[18px] font-bold">←</span>
            </button>
            
            {/* Centered Title */}
            <h1 className="text-[16px] font-semibold text-black w-full text-center">
              Adjust Preferences
            </h1>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-[24px] py-[20px]">
            
            {/* Taste Profile Section */}
            <div className="mb-[24px]">
              <h2 className="text-[14px] font-semibold text-black mb-[12px]">
                Taste Profile
              </h2>
              <div className="flex flex-wrap gap-[8px]">
                {['Spicy', 'Savory', 'Sweet', 'Light'].map((taste) => (
                  <button
                    key={taste}
                    onClick={() => toggleTastePref(taste)}
                    className={`px-[16px] py-[8px] border-2 text-[14px] ${
                      tastePrefs.includes(taste)
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-400'
                    }`}
                  >
                    {taste}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary Needs Section */}
            <div className="mb-[24px]">
              <h2 className="text-[14px] font-semibold text-black mb-[12px]">
                Dietary Needs
              </h2>
              <div className="flex flex-wrap gap-[8px]">
                {['None', 'Vegetarian', 'Vegan', 'Gluten-Free'].map((diet) => (
                  <button
                    key={diet}
                    onClick={() => setDietary(diet)}
                    className={`px-[16px] py-[8px] border-2 text-[14px] ${
                      dietary === diet
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-400'
                    }`}
                  >
                    {diet}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range Section */}
            <div className="mb-[24px]">
              <h2 className="text-[14px] font-semibold text-black mb-[12px]">
                Budget Range
              </h2>
              <div className="flex gap-[8px]">
                {['$', '$$', '$$$'].map((price) => (
                  <button
                    key={price}
                    onClick={() => toggleFilter(price)}
                    className={`px-[24px] py-[8px] border-2 text-[14px] ${
                      activeFilters.includes(price)
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-400'
                    }`}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>

            {/* Preference Mode Section */}
            <div className="mb-[24px]">
              <h2 className="text-[14px] font-semibold text-black mb-[12px]">
                Preference Mode
              </h2>
              <div className="flex flex-col gap-[8px]">
                {['Play it Safe', 'Explore New Dishes'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setPreferenceMode(mode)}
                    className={`w-full px-[16px] py-[12px] border-2 text-[14px] text-left ${
                      preferenceMode === mode
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-400'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Apply Changes Button - Fixed at Bottom */}
          <div className="px-[24px] py-[20px] bg-gray-100 border-t-2 border-gray-400">
            <PrimaryButton onClick={() => setScreen('results')}>
              Apply Changes
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'dish-detail') {
    if (!selectedDish) return null;

    // Mock flavor tags based on the dish - reduced to 4-5 tags
    const flavorTags = ['Spicy', 'Savory', 'Bold', 'Citrusy'];

    return (
      <div className="size-full flex items-center justify-center bg-white">
        {/* Mobile wireframe container */}
        <div className="w-[375px] h-[667px] bg-gray-100 border-2 border-gray-400 flex flex-col">
          
          {/* Top App Bar */}
          <div className="h-[56px] bg-white border-b-2 border-gray-400 flex items-center px-[16px] relative">
            {/* Back Arrow */}
            <button 
              onClick={() => setScreen('results')}
              className="w-[32px] h-[32px] border-2 border-black flex items-center justify-center absolute left-[16px]"
            >
              <span className="text-[18px] font-bold">←</span>
            </button>
            
            {/* Centered Restaurant Name */}
            <h1 className="text-[16px] font-semibold text-black w-full text-center">
              Noodlehead
            </h1>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-[16px] py-[12px]">
            
            {/* Dish Image Placeholder - Reduced Height */}
            <div className="w-full h-[160px] bg-gray-300 border-2 border-gray-400 flex items-center justify-center mb-[12px]">
              <span className="text-[14px] text-gray-600">Dish Image</span>
            </div>

            {/* Dish Name and Heart Icon */}
            <div className="flex items-start justify-between gap-[12px] mb-[8px]">
              <h2 className="text-[18px] font-bold text-black flex-1">
                {selectedDish.name}
              </h2>
              <Heart className="w-[24px] h-[24px] text-gray-700 shrink-0" strokeWidth={2} />
            </div>

            {/* Price and Spice Indicator on Same Line */}
            <div className="flex items-center gap-[16px] mb-[12px]">
              <span className="text-[16px] font-semibold text-black">
                {selectedDish.price}
              </span>
              
              {/* Spice Indicator */}
              {selectedDish.spiceLevel > 0 && (
                <div className="flex gap-[4px]">
                  {[0, 1, 2].map((level) => (
                    <Flame
                      key={level}
                      className={`w-[14px] h-[14px] ${
                        level < selectedDish.spiceLevel
                          ? 'text-black fill-black'
                          : 'text-gray-400'
                      }`}
                      strokeWidth={2}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Flavor Highlights - Pill Tags (Before Summary) */}
            <div className="flex flex-wrap gap-[8px] mb-[12px]">
              {flavorTags.map((tag, index) => (
                <div
                  key={index}
                  className="px-[12px] py-[6px] bg-white border-2 border-gray-400 text-[12px] text-black"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Summary Text - Directly Below Tags (No Section Header) */}
            <p className="text-[12px] text-gray-700 leading-relaxed mb-[16px]">
              {selectedDish.summary} Perfect for those who enjoy bold flavors with a kick of heat.
            </p>

            {/* Key Ingredients Section */}
            <div className="mb-[16px]">
              <h3 className="text-[14px] font-semibold text-black mb-[8px]">
                Key Ingredients
              </h3>
              <ul className="space-y-[4px]">
                <li className="text-[12px] text-gray-700 flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Fresh chicken breast</span>
                </li>
                <li className="text-[12px] text-gray-700 flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>House-made spicy sauce</span>
                </li>
                <li className="text-[12px] text-gray-700 flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Crispy tortilla shells</span>
                </li>
                <li className="text-[12px] text-gray-700 flex items-start">
                  <span className="mr-[8px]">•</span>
                  <span>Fresh cilantro and lime</span>
                </li>
              </ul>
            </div>

            {/* Why this matches you Section */}
            <div className="mb-[16px]">
              <h3 className="text-[14px] font-semibold text-black mb-[8px]">
                Why this matches you
              </h3>
              <ul className="space-y-[4px]">
                <li className="text-[12px] text-gray-700 flex items-start">
                  <Check className="w-[14px] h-[14px] text-black mr-[8px] shrink-0 mt-[1px]" strokeWidth={2} />
                  <span>Matches your spicy preference</span>
                </li>
                <li className="text-[12px] text-gray-700 flex items-start">
                  <Check className="w-[14px] h-[14px] text-black mr-[8px] shrink-0 mt-[1px]" strokeWidth={2} />
                  <span>Within your $$ budget range</span>
                </li>
                <li className="text-[12px] text-gray-700 flex items-start">
                  <Check className="w-[14px] h-[14px] text-black mr-[8px] shrink-0 mt-[1px]" strokeWidth={2} />
                  <span>High protein content you prefer</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons - Fixed at Bottom */}
          <div className="px-[16px] py-[12px] bg-gray-100 border-t-2 border-gray-400">
            <PrimaryButton onClick={() => {}}>
              Show on Original Menu
            </PrimaryButton>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="h-[64px] bg-white border-t-2 border-gray-400 flex items-center justify-around">
            <button 
              onClick={() => setActiveTab('home')}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'home' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'home' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Home
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('favorites');
                setScreen('favorites');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'favorites' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'favorites' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Favorites
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('profile');
                setScreen('profile');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'profile' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'profile' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Profile
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'profile') {
    return (
      <div className="size-full flex items-center justify-center bg-white">
        {/* Mobile wireframe container */}
        <div className="w-[375px] h-[667px] bg-gray-100 border-2 border-gray-400 flex flex-col">
          
          {/* Top App Bar */}
          <div className="h-[56px] bg-white border-b-2 border-gray-400 flex items-center px-[16px]">
            {/* Centered Title */}
            <h1 className="text-[16px] font-semibold text-black w-full text-center">
              Profile
            </h1>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-[24px] py-[24px]">
            
            {/* Account Information Section */}
            <div className="mb-[32px]">
              <h2 className="text-[14px] font-semibold text-black mb-[16px]">
                Account Information
              </h2>
              {/* Circular Avatar + User Info */}
              <div className="flex items-center gap-[16px] mb-[16px]">
                {/* Circular Avatar Placeholder */}
                <div className="w-[64px] h-[64px] rounded-full bg-gray-300 border-2 border-gray-400 shrink-0" />
                
                {/* User Name and Email */}
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[16px] font-semibold text-black">Alex Johnson</span>
                  <span className="text-[14px] text-gray-700">alex.johnson@email.com</span>
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div className="mb-[32px]">
              <h2 className="text-[14px] font-semibold text-black mb-[12px]">
                Preferences
              </h2>
              <div className="bg-white border-2 border-gray-400 p-[16px] space-y-[12px]">
                {/* Taste Preferences */}
                <div>
                  <span className="text-[12px] text-gray-700">Taste:</span>
                  <p className="text-[14px] text-black mt-[4px]">
                    {tastePrefs.length > 0 ? tastePrefs.join(', ') : 'Not set'}
                  </p>
                </div>
                
                {/* Dietary */}
                <div>
                  <span className="text-[12px] text-gray-700">Dietary:</span>
                  <p className="text-[14px] text-black mt-[4px]">{dietary}</p>
                </div>
                
                {/* Budget */}
                <div>
                  <span className="text-[12px] text-gray-700">Budget:</span>
                  <p className="text-[14px] text-black mt-[4px]">
                    {activeFilters.length > 0 ? activeFilters.join(', ') : 'Not set'}
                  </p>
                </div>
              </div>
              
              {/* Adjust Preferences Button */}
              <div className="mt-[12px]">
                <button 
                  onClick={() => setScreen('adjust-preferences')}
                  className="w-full h-[48px] bg-white border-2 border-gray-400 text-[14px] font-semibold text-black"
                >
                  Adjust Preferences
                </button>
              </div>
            </div>

            {/* Saved Section */}
            <div className="mb-[32px]">
              <h2 className="text-[14px] font-semibold text-black mb-[12px]">
                Saved
              </h2>
              <button 
                onClick={() => {
                  setActiveTab('favorites');
                  setScreen('favorites');
                }}
                className="w-full h-[48px] bg-white border-2 border-gray-400 flex items-center justify-between px-[16px]"
              >
                <span className="text-[14px] text-black">View Favorites</span>
                <span className="text-[18px] text-black">→</span>
              </button>
            </div>

            {/* Account Section */}
            <div className="mb-[24px]">
              <h2 className="text-[14px] font-semibold text-black mb-[12px]">
                Account
              </h2>
              
              {/* Log Out Button */}
              <button className="w-full h-[48px] bg-white border-2 border-gray-400 text-[14px] font-semibold text-black mb-[16px]">
                Log Out
              </button>
              
              {/* Delete Account Option - Visually Separated */}
              <div className="pt-[16px] border-t-2 border-gray-400">
                <button 
                  onClick={() => setScreen('welcome')}
                  className="w-full h-[48px] bg-white border-2 border-gray-400 text-[14px] text-gray-700"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="h-[64px] bg-white border-t-2 border-gray-400 flex items-center justify-around">
            <button 
              onClick={() => {
                setActiveTab('home');
                setScreen('home');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'home' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'home' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Home
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('favorites');
                setScreen('favorites');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'favorites' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'favorites' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Favorites
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('profile');
                setScreen('profile');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'profile' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'profile' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Profile
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  if (screen === 'favorites') {
    // Mock favorite dishes data with restaurant names
    const mockFavoriteDishes = [
      {
        name: 'Spicy Chicken Tacos',
        restaurant: 'Noodlehead',
        price: '$12',
        spiceLevel: 3,
      },
      {
        name: 'Thai Curry Bowl',
        restaurant: 'Thai Palace',
        price: '$13',
        spiceLevel: 2,
      },
      {
        name: 'Margherita Pizza',
        restaurant: 'Pizza Corner',
        price: '$14',
        spiceLevel: 0,
      },
    ];

    // Use favoriteDishes state if not empty, otherwise show empty state
    const hasFavorites = mockFavoriteDishes.length > 0;

    return (
      <div className="size-full flex items-center justify-center bg-white">
        {/* Mobile wireframe container */}
        <div className="w-[375px] h-[667px] bg-gray-100 border-2 border-gray-400 flex flex-col">
          
          {/* Top App Bar */}
          <div className="h-[56px] bg-white border-b-2 border-gray-400 flex items-center px-[16px]">
            {/* Centered Title */}
            <h1 className="text-[16px] font-semibold text-black w-full text-center">
              Favorites
            </h1>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-[16px] py-[16px]">
            
            {hasFavorites ? (
              /* List of Saved Dishes */
              <div className="space-y-[12px]">
                {mockFavoriteDishes.map((dish, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-400 p-[12px] flex gap-[12px] items-start"
                  >
                    {/* Small Square Thumbnail on Left */}
                    <div className="w-[64px] h-[64px] bg-gray-300 border-2 border-gray-400 shrink-0 flex items-center justify-center">
                      <span className="text-[10px] text-gray-600">IMG</span>
                    </div>

                    {/* Dish Info - Middle */}
                    <div className="flex-1 flex flex-col gap-[4px]">
                      {/* Dish Name (Bold) */}
                      <h3 className="text-[14px] font-bold text-black">
                        {dish.name}
                      </h3>
                      
                      {/* Restaurant Name */}
                      <p className="text-[12px] text-gray-700">
                        {dish.restaurant}
                      </p>
                      
                      {/* Price and Spice Indicator on Same Line */}
                      <div className="flex items-center gap-[12px] mt-[4px]">
                        <span className="text-[12px] font-semibold text-black">
                          {dish.price}
                        </span>
                        
                        {/* Spice Indicator */}
                        {dish.spiceLevel > 0 && (
                          <div className="flex gap-[2px]">
                            {[0, 1, 2].map((level) => (
                              <Flame
                                key={level}
                                className={`w-[12px] h-[12px] ${
                                  level < dish.spiceLevel
                                    ? 'text-black fill-black'
                                    : 'text-gray-400'
                                }`}
                                strokeWidth={2}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Filled Heart Icon on Right */}
                    <Heart 
                      className="w-[20px] h-[20px] text-black fill-black shrink-0" 
                      strokeWidth={2} 
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="flex flex-col items-center justify-center h-full py-[80px]">
                <div className="text-center mb-[32px]">
                  <h2 className="text-[16px] font-semibold text-black mb-[8px]">
                    No saved dishes yet.
                  </h2>
                  <p className="text-[14px] text-gray-700">
                    Tap the heart icon to save dishes.
                  </p>
                </div>
                
                <div className="w-full px-[32px]">
                  <PrimaryButton onClick={() => setScreen('home')}>
                    Browse Restaurants
                  </PrimaryButton>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Navigation Bar */}
          <div className="h-[64px] bg-white border-t-2 border-gray-400 flex items-center justify-around">
            <button 
              onClick={() => {
                setActiveTab('home');
                setScreen('home');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'home' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'home' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Home
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('favorites');
                setScreen('favorites');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'favorites' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'favorites' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Favorites
              </span>
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('profile');
                setScreen('profile');
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[4px]"
            >
              <div className={`w-[24px] h-[24px] border-2 ${activeTab === 'profile' ? 'bg-black border-black' : 'border-gray-400'}`} />
              <span className={`text-[12px] ${activeTab === 'profile' ? 'text-black font-semibold' : 'text-gray-600'}`}>
                Profile
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}