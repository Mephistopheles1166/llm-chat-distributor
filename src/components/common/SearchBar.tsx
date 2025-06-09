import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Icon } from '@/components/ui/Icon';
import { useAppStore } from '@/stores/appStore';
import { debounce } from '@/utils';

export const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useAppStore();
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const debouncedSearch = debounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  useEffect(() => {
    debouncedSearch(localQuery);
  }, [localQuery, debouncedSearch]);

  return (
    <div className="w-full max-w-lg">
      <Input
        placeholder="搜索模型、标签或您想要的功能..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        icon={<Icon name="search" size={18} />}
        className="text-base"
      />
    </div>
  );
};