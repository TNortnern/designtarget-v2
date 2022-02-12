const drawerOpen = ref(false)
export function useMobileNavigation() {
  return {
    isDrawerOpen: () => drawerOpen.value,
    toggleDrawer: (value?: boolean) => value || value === false ? drawerOpen.value = value : drawerOpen.value = !drawerOpen.value,
  }
}
