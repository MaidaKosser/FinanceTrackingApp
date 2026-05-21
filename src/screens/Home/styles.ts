import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E6F6F0', // Matches the soft mint aesthetic
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Safe padding allowance above bottom navigation tabs
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 24,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F291E',
  },
  dateBadge: {
    backgroundColor: '#FF8A43', // Distinct orange interactive accent
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  balanceContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  balanceLabel: {
    fontSize: 15,
    color: '#537164',
    fontWeight: '500',
    marginBottom: 6,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  balanceValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0F291E',
    letterSpacing: 0.5,
  },
  visibilityToggle: {
    padding: 6,
  },
  visibilityIcon: {
    fontSize: 20,
    color: '#0F291E',
  },
  actionDeck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 28,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  activeActionButton: {
    backgroundColor: '#FF8A43',
  },
  actionIconText: {
    fontSize: 18,
    marginBottom: 4,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F291E',
  },
  activeActionLabel: {
    color: '#FFFFFF',
  },
  summaryCard: {
    backgroundColor: '#D3F2E4',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  summaryLabel: {
    fontSize: 15,
    color: '#153C2B',
    fontWeight: '500',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#153C2B',
  },
  sectionHeader: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2A473B',
    marginBottom: 12,
  },
  transactionRowCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatarCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#FFF5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
  },
  txTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F291E',
    marginBottom: 2,
  },
  txSubtitle: {
    fontSize: 13,
    color: '#769485',
  },
  rightGroup: {
    alignItems: 'flex-end',
  },
  txValueNegative: {
    fontSize: 16,
    fontWeight: '700',
    color: '#EB5757',
    marginBottom: 4,
  },
  txTimestamp: {
    fontSize: 12,
    color: '#769485',
  },
});