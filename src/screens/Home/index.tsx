import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useController } from "./useController";
import { styles } from "./styles";

export default function HomeScreen() {
  // Bind clean state metrics directly from our structural hook logic file
  const {
    isBalanceVisible,
    toggleBalanceVisibility,
    currentMonth,
    totalExpenditure,
    dailyTransactions,
  } = useController();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* TOP HEADER BLOCK: Branding Title & Date Controller */}
        <View style={styles.headerRow}>
          <Text style={styles.greetingText}>Let's save! 💵</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.dateBadge}>
            <Text style={styles.dateText}>{currentMonth}</Text>
            <Text style={{ color: "#FFF", fontSize: 10 }}>▶</Text>
          </TouchableOpacity>
        </View>

        {/* BALANCE DISPLAY BLOCK: Dynamic privacy mask support */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Total balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceValue}>
              {isBalanceVisible ? "$14,250.00" : "••••••••••"}
            </Text>
            <TouchableOpacity
              onPress={toggleBalanceVisibility}
              style={styles.visibilityToggle}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={styles.visibilityIcon}>
                {isBalanceVisible ? "👁️" : "🙈"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FEATURE SELECTION DECK: Quick Category Filters */}
        <View style={styles.actionDeck}>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.9}>
            <Text style={styles.actionIconText}>↘</Text>
            <Text style={[styles.actionLabel, styles.activeActionLabel]}>
              Expend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Text style={styles.actionIconText}>↗</Text>
            <Text style={styles.actionLabel}>Income</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Text style={styles.actionIconText}>🔄</Text>
            <Text style={styles.actionLabel}>Loan</Text>
          </TouchableOpacity>
        </View>

        {/* SUMMARY INSIGHT DISPLAY BAR */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total expenditure</Text>
          <Text style={styles.summaryValue}>${totalExpenditure}</Text>
        </View>

        {/* TRANSACTION LEDGER LAYER */}
        <View>
          <Text style={styles.sectionHeader}>Today, 21 May</Text>

          {dailyTransactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionRowCard}>
              {/* Left Segment: Category Metaphors */}
              <View style={styles.leftGroup}>
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarText}>🍴</Text>
                </View>
                <View>
                  <Text style={styles.txTitle}>{transaction.category}</Text>
                  <Text style={styles.txSubtitle}>
                    {transaction.description}
                  </Text>
                </View>
              </View>

              {/* Right Segment: Numeric Values */}
              <View style={styles.rightGroup}>
                <Text style={styles.txValueNegative}>
                  -${Math.abs(transaction.amount)}
                </Text>
                <Text style={styles.txTimestamp}>{transaction.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
