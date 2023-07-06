const calculateSum = (sortedArray) => {
      const selectedItemsSet = new Set(route.params.selectedItemsList);
      const selectedLengths = sortedArray.filter((length) => selectedItemsSet.has(length.id));
      const sum = selectedLengths.reduce((acc, length) => acc + length.count, 0);
      setSum(sum)
    }
